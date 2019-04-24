    var MenuDyanimicModule = (function(){
        $.ajax({
            url:'https://powerful-mesa-99670.herokuapp.com/api/vendors',
            method: 'GET',
            success: function(result){
                if(result.length > 0){
                    renderMenu(result)
                }
            }
        });
        
        function renderMenu(result){
            var el = $('.menu-level-1.dropdown-menu '),
                    fashionLabelDesignersTemplate = '',
                    shootDesignerTemplate = '',
                    fashionEl = $('.topbar-left.v1.hidden-xs.hidden-sm > ul li:first-child ul.menu-level-2 '),
                    shootEl = $('.topbar-left.v1.hidden-xs.hidden-sm > ul li:nth-of-type(2) ul.menu-level-2'),
                    mobilefashionel = $('div#myNavbar > ul li.level1.dropdown.hassub .menu-level-1.dropdown-menu ul li ul'),
                    dynamicMenuMobile = '';

            var fashionLabelDesigners = result.filter(function(item){
                return item.category_id.category_name === 'Designer'
            });
            var shootDesigner = result.filter(function(item){
                return item.category_id.category_name === 'Shoots'
            });

            if(fashionLabelDesigners.length > 0){
                fashionLabelDesigners.forEach(function(item){
                    fashionLabelDesignersTemplate += `<li class="level3"><a href="vendor.html?vendor=${item.vendor_name}">${item.vendor_name}</a></li>`
                });
                
                dynamicMenuMobile += '<h3>Fashion Labels</h3>';
                fashionLabelDesigners.forEach(function(item){
                    dynamicMenuMobile += `<li class="level3"><a href="vendor.html?vendor=${item.vendor_name}">${item.vendor_name}</a></li>`
                });
                fashionEl.html(fashionLabelDesignersTemplate)
            }

            if(shootDesigner.length > 0){
                shootDesigner.forEach(function(item){
                    shootDesignerTemplate += `<li class="level3"><a href="vendor.html?vendor=${item.vendor_name}">${item.vendor_name}</a></li>`
                });

                
                dynamicMenuMobile += '<h3>Fashion Shoots</h3>';
                shootDesigner.forEach(function(item){
                    dynamicMenuMobile += `<li class="level3"><a href="vendor.html?vendor=${item.vendor_name}">${item.vendor_name}</a></li>`
                });
                shootEl.html(shootDesignerTemplate)
            }
            
            dynamicMenuMobile += `<h3> Gifting</h3>`;
            dynamicMenuMobile += `<li class="level3"><a href="#" title="">Bride &amp; Groom Hampers</a></li><li class="level3"><a href="#" title="">Bridesmaid Hampers</a></li><li class="level3"><a href="#" title="">Bulk gifting</a></li>`;

            mobilefashionel.html(dynamicMenuMobile);
            
        }
    })
    MenuDyanimicModule()