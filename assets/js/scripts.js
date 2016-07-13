!function (e) {
    "use strict";
    var n = window.GBYDATA_JS || {};
        
        n.PreLoader = function () {
            e(".page-loader").hide();
        },

        n.mobileMenu = {
            init: function () {
                this.toggleMenu(), this.addClassParent(), this.addRemoveClasses()
            },
            toggleMenu: function () {
                var n = this,
                    t = e("#masthead");
                e("#nav-toggle").click(function (a) {
                    a.preventDefault(), t.hasClass("open") ? (t.removeClass("open"), e(".menu").find("li").removeClass("show")) : (t.addClass("open"), n.showSubmenu())
                })
            },
            addClassParent: function () {
                e(".menu").find("li > ul").each(function () {
                    e(this).parent().addClass("parent")
                })
            },
            addRemoveClasses: function () {
                var n = e(".menu");
                e(window).width() < 992 ? n.addClass("mobile") : (e("body").removeClass("open"), n.removeClass("mobile").find("li").removeClass("show"))
            },
            showSubmenu: function () {
                e(".menu").find("a").each(function () {
                    var n = e(this);
                    n.next("ul").length && n.one("click", function (n) {
                        n.preventDefault(), e(this).parent().addClass("show")
                    })
                })
            }
        },

        n.Infographs = function () {
            Morris.Donut({
                element: 'learners',
                resize: 'true',
                colors: [
                        '#0b62a4',
                        '#188ae2',
                        '#f9c851'
                      ],
                
                data: [
                        {value: 63, label: 'Active Learners', formatted: '63% ' },
                        {value: 37, label: 'Non Active', formatted: '37% ' }
                      ],
                      formatter: function (x, data) { return data.formatted; }
              });
              
              e( "#learners" ).mouseover(function() {
                    preparelearners();
                });

                e( document ).ready(function() {
                    preparelearners();
                });

                function preparelearners() {
                    e("#learners tspan:first").css("display","none");
                    e("#learners tspan:nth-child(1)").css("font-size","40px");
                    
                    var isi = e("#learners tspan:first").html();
                    e('#learnersSpan').text(isi);
                }

             Morris.Donut({
                element: 'total_learners',
                resize: 'true',
                colors: [
                        '#0b62a4',
                        '#188ae2',
                        '#f9c851'
                      ],
                data: [
                        {value: 63, label: 'Active Learners', formatted: '63% ' },
                        {value: 37, label: 'Non Active', formatted: '37% ' }
                      ],
                      formatter: function (x, data) { return data.formatted; }
              });

              Morris.Bar({
              element: 'data-bar',
              resize: 'true',
              data: [
                { y: '2/15', a: 5},
                { y: '2/16', a: 4},
                { y: '2/17', a: 9},
                { y: '2/18', a: 10},
                { y: '2/19', a: 15},
                { y: '2/20', a: 10},
                { y: '2/21', a: 14}
              ],
              xkey: 'y',
              ykeys: ['a'],
              labels: ['Series A', 'Series B']
            });
        },
        
        n.ToolTip = function () {
            e('[data-toggle="tooltip"]').tooltip();
        },

        e(document).ready(function () {
            n.PreLoader(), n.mobileMenu.init(), n.Infographs(), n.ToolTip()
        }), e(window).resize(function () {
        n.mobileMenu.addRemoveClasses()
    })
}(jQuery);


