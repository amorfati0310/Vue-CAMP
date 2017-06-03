(function(global, Vue){
  'use strict';

  global.demo = new Vue({
    el: '.demo',
    data: {
      is_block_show: true,
      using_register: false,
      class_name: 'front-end design camp',
      // fdc: front-end design camp
      fdc: classUsingArray // [{}, {}, {}, ...] length: 10
    },
    // Life Cycle Hook
    beforeCreate: function() {
      console.log('Vue 객체(인스턴스) 생성 이전 시점');
    },
    created: function() {
      console.log('Vue 객체(인스턴스) 생성 이후 시점');
    },
    beforeMount: function() {
      console.log('Vue 객체(인스턴스) 마운트 이전 시점');
    },
    mounted: function() {
      console.log('Vue 객체(인스턴스) 마운트 이후 시점');

      // ——————————————————————————————————————————————————————————————————————————————————————————
      // Vue.js 방법을 사용하지 않고, DOM 스크립트 + 라이프사이클 훅(mounted)를 사용하여 이벤트 핸들링 (비효율적)
      // ——————————————————————————————————————————————————————————————————————————————————————————

      var document               = global.document;
      var _this                  = this;
      var demo                   = _this.$el;
      var register_btn           = demo.querySelector('.button.using-register');

      register_btn.addEventListener('click', toggleRegisterView.bind(_this));

      function toggleRegisterView () {
        _this.using_register = !_this.using_register;
        global.setTimeout(changeDOMBindEvent.bind(_this), 0);
      }

      function changeDOMBindEvent() {
        var register_classmate_btn = demo.querySelector('.register-classmate');
        register_classmate_btn.addEventListener('click', registerClassMate);
      }

      function registerClassMate(e) {
        var input = this.previousElementSibling;
        var user_name = input.value.trim();
        if ( user_name ) {
          addListItem(user_name);
        }
      }

      function addListItem(name) {
        console.log(_this);
        _this.fdc.unshift({
          name: name
        });
      }

    },
    beforeUpdate: function() {
      console.log('Vue 객체(인스턴스) 업데이트 이전 시점');
    },
    updateed: function() {
      console.log('Vue 객체(인스턴스) 업데이트 이후 시점');
    },
    beforeDestroy: function() {
      console.log('Vue 객체(인스턴스) 파괴 이전 시점');
    },
    destroyed: function() {
      console.log('Vue 객체(인스턴스) 파괴 이후 시점');
    }
  });

})(window, window.Vue);