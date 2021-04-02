function StartChat(id) {
    document.getElementById('chatPanel').removeAttribute('style');
    document.getElementById('divStart').setAttribute('style', 'display:none');

    hideChatList();
}

////////////////////////////

function showChatList() {
    document.getElementById('side-1').classList.remove('d-none','d-md-block');
    document.getElementById('side-2').classList.add('d-none');
}

function hideChatList() {
    document.getElementById('side-1').classList.add('d-none', 'd-md-block');
    document.getElementById('side-2').classList.remove('d-none');
}

function onkeydown() {
    document.addEventListener('keydown', function (key) {
        if (key.which === 13) {
            SendMessage();
        }

    });
}

function fn1() {
    var str = document.getElementById("txtMessage").value;
    var message = `<div class="row justify-content-end">

                            <div class="col-6 col-sm-6 col-md-6">
                                <p class="sent float-right">
                                    ${document.getElementById('txtMessage').value}
                                    <span class="time float-right">2:15AM</span>
                                </p>
                            </div>
                            <div class="col-2 col-sm-1 col-md-1">
                            </div>
                        </div>`;

    document.getElementById('messages').innerHTML += message;
    document.getElementById('txtMessage').value = '';
    document.getElementById('txtMessage').focus();

    document.getElementById('messages').scrollTo(0, document.getElementById('messages').clientHeight);
}

///////////////////////////////////////////////

function signIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}