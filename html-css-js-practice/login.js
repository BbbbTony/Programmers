
            // id 란에 입력된 값을 팝업창에 띄우기
            function popId() {
                let userId = document.getElementById('txt_id').value;

                if(userId == "") { //아 맞다 암것도 없는거 "" 이거였지... 맨앞에 ! 이거해도 같은말
                    alert(' 아이디 입력해주세요');
                } else {
                    alert(userId);
                }
                
            }

            //함수 만들어보기 
            function myFunction(){ 
                alert('1');
                alert('2');
                alert('3');
            }
