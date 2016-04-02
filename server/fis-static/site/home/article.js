/**
 * 文章相关操作
 * @method
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
var article = (function() {
  var $ = require('jquery');
  var tools = require('pizzatools');
  var common = require('common/common');
  var node = require('home/tree/tree');
  require('pizzaui');
  var my = {};
  var options = {
    url: '/home/article/',
    tpl: __inline('./ejs/article.ejs'),
    cp: 1,
    mp: 20
  };
  var isScroll = true;

  /**
   * 初始化执行函数
   * @method function
   * @return {[type]} [description]
   */
  my.init = function() {
      eventBind(); //绑定所有交互操作
      scrollEvent(); //绑定滚动条事件
      common.checkAll('#checkall'); //checkall
      //绑定节点切换事件

      node.pageall(function(data) {
        var no = $('#node')
        no.html(data);
        no.pizzaSelect({
          onChange: function(obj) {
            page(1);
          }
        });
        page(1); //
      });

      common.kwSearch('#searchkw', function() {
        page(1);
      });


    }
    /**
     * 编辑文章
     * @method function
     * @param  {[type]} obj [description]
     * @return {[type]}     [description]
     */
  my.get = function() {

      var id = tools.getPara("id");
      if (id == "") {
        node.pageall(function(data) {
          var no = $('#nodeid');
          no.html(data);
          no.pizzaSelect({});
          my.edit();
        });
        return;
      }
      $.ajax({
        url: options.url + 'get',
        data: 'id=' + id,
        success: function(msg) {
          if (msg.state == true) {
            for (var key in msg.msg) {
              $('#' + key).val(msg.msg[key]);
            }
            $('#pass').attr("val", msg.msg.pass);
            $('#reco').attr("val", msg.msg.reco);
            $('.select').pizzaSelect();

            node.pageall(function(data) {
              var no = $('#nodeid');
              no.attr('val', msg.msg.nodeid);
              no.html(data);
              no.pizzaSelect({});
              my.edit();
            });
            editor.html(msg.msg.content);
          }
        }
      });
    }
    /**
     * 编辑文章
     * @method function
     * @param  {[type]} obj [description]
     * @return {[type]}     [description]
     */
  my.edit = function() {
      $(".form").pizzaValidate({
        'fields': {
          '#title': {
            'must': true,
            'minLength': 5,
            'maxLength': 48,
            focusMsg: "请输入标题",
            errMsg: '标题不能为空或标题必须在5-48个字符之间'
          },
          '#nodeid': {
            'must': true,
            'minLength': 1,
            'maxLength': 12,
            focusMsg: "请选择节点",
            errMsg: '请选择节点'
          },
          '#timg': {
            'must': false,
            'minLength': 1,
            'maxLength': 100,
            focusMsg: "请上传标题图片(非必填)",
            errMsg: '标题图须在1-100个字符之间'
          },
          '#link': {
            'must': false,
            'minLength': 8,
            'maxLength': 150,
            focusMsg: "请输入自定义链接(非必填)",
            errMsg: '自定义链接须在8-150个字符之间'
          },
          '#source': {
            'must': false,
            'minLength': 2,
            'maxLength': 30,
            focusMsg: "请输入文章来源(非必填)",
            errMsg: '文章来源须在2-30个字符之间'
          },
          '#brief': {
            'must': false,
            'minLength': 2,
            'maxLength': 300,
            focusMsg: "请输入文章描述(非必填)",
            errMsg: '文章描述须在2-300个字符之间'
          },
          '#tags': {
            'must': false,
            'minLength': 2,
            'maxLength': 30,
            focusMsg: "请输入文章标签，空格隔开(非必填)",
            errMsg: '文章标签须在2-30个字符之间'
          },
          '#pass': {
            'must': true,
            'minLength': 1,
            'maxLength': 3,
            focusMsg: " ",
            errMsg: ' '
          },
          '#reco': {
            'must': false,
            'minLength': 1,
            'maxLength': 3,
            focusMsg: " ",
            errMsg: ' '
          },
        },
        ajaxFun: function(data) {
          var id = tools.getPara("id");
          var op = "create";
          if (id != "") {
            op = "update";
            data += '&id=' + id;
          }
          data += '&content=' + editor.html();
          $.ajax({
            url: options.url + op,
            data: data,
            success: function(msg) {
              if (msg.state == true) {
                history.back();
              }
            }
          });
        }
      });
    }
    /**
     * 获取文章列表
     * @method page
     * @return {[type]} [description]
     */
  function page(cp, mp) {
    if (cp) {
      options.cp = cp;
    }
    $.ajax({
      url: options.url + 'page',
      data: 'cp=' + options.cp + '&mp=' + options.mp + '&kw=' + $.trim($('#searchkw').val()) + '&nodeid=' + $('#node').val(),
      success: function(msg) {
        var s = options.tpl({
          "data": msg.msg
        });
        if (cp == 1) {
          $('#list').html(s);
        } else {
          $('#list').append(s);
        }
        options.cp += 1;
        isScroll = true;
      }
    });
  }
  /**
   * 操作事件绑定
   * @method eventBind
   * @return {[type]}  [description]
   */
  function eventBind() {
    $('#list').on('click', 'li > span > i', function() {
      var cl = $(this).attr('class');
      console.log(cl);
      if (cl) {
        action[cl].call(this, $(this));
      }
    });
    $('#main > div.menu').on('click', 'em', function() {
      var cl = $(this).attr('class');
      if (cl) {
        action[cl].call(this, $(this));
      }
    });
  }
  /**
   * 滚动条滚动事件
   * @method scrollEvent
   * @return {[type]}    [description]
   */
  function scrollEvent() {
    $(window).scroll(function() {
      var docHeight = document.body.scrollHeight;
      var scrollTop = 0; //滚动条高度
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      var bottomHeight = docHeight - scrollTop - $(window).height();
      //console.log(bottomHeight);
      //console.log(isScroll);
      if (bottomHeight < 100 && isScroll == true) {
        page();
        isScroll = false;
      }
    });
  }
  /////action
  var action = {};
  /**
   *
   * @method remove
   * @return {[type]} [description]
   */
  action.remove = function(obj) {
      var id = common.getCheckId(obj);
      console.log(id);
      if (id == '0') {
        return;
      }
      $.ajax({
        url: options.url + 'remove',
        data: 'id=' + id,
        success: function(msg) {
          if (msg.state == true) {
            var ids = id.split(',');
            for (var i = 0, ll = ids.length; i < ll; i++) {
              $('#' + ids[i]).parent().parent().remove();
            }
          }
        }
      });
    }
    /**
     * 审核文章
     * @method function
     * @return {[type]} [description]
     */
  action.pass = function(obj) {
    var id = common.getCheckId(obj);
    if (id == '0') {
      return;
    }
    console.log("id=" + id);
    var ispass = "false";
    if (obj.html() == '审核') {
      ispass = "true";
    }
    $.ajax({
      url: options.url + 'pass',
      data: 'id=' + id + '&ispass=' + ispass,
      success: function(msg) {
        if (msg.state == true) {
          console.log('asdasd');
          var ids = id.split(',');
          if (ispass == "true") { //审核
            for (var i = 0, ll = ids.length; i < ll; i++) {
              console.log(ids[i]);
              var oo = $('#' + ids[i]).parent().parent();
              oo.find('b').remove();
              oo.find('i.pass').html('取消审核');
            }
          } else { //取消审核
            for (var i = 0, ll = ids.length; i < ll; i++) {
              var oo = $('#' + ids[i]).parent().parent();
              oo.children('a').after('<b>[未审核]</b>');
              oo.find('i.pass').html('审核');
            }
          }
        }
      }
    });
  }


  return my;
}());

module.exports = article;
