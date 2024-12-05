var idcord = document.getElementById('idcord');
                    var idcordquery = document.getElementById('idcordquery');
                    var password = document.getElementById('password');
                    var passwordquery = document.getElementById('passwordquery');
                    var loginbtn= document.getElementById('loginbtn');

                    loginbtn.addEventListener('click', function (event) {
                    if(idcord.value==''){
                        idcordquery.style.display = 'inline';
                        setTimeout(() => {
                        idcordquery.style.display = 'none';
                        },3000)
                        return
                    }
                    if(password.value==''){
                        passwordquery.style.display = 'inline';
                        setTimeout(() => {
                        passwordquery.style.display = 'none';
                        },3000)
                        return
                    }
                    window.location.href = 'https://htmlpreview.github.io/?https://github.com/liu0307113042/-web5/blob/33de981f7d4af6d4f44bf2e4e51085b395e43b36/index.html'
                    });