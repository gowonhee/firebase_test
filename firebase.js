/*
const btn = document.getElementById("btn");

btn.addEventListener("click",(event)=> {
    event.preventDefault();

    const ID = document.member.id.value;
    const mail = document.member.email.value;
    const ninkName = document.member.nick.value;

    console.log(ID);
    console.log(mail);
    console.log(ninkName);
});
*/
const firebaseConfig = {
    apiKey: "AIzaSyCpRri-7ZqEEEeDvQk3yTsrDu2MZybAChY",
    authDomain: "project-wh-896ed.firebaseapp.com",
    projectId: "project-wh-896ed",
    storageBucket: "project-wh-896ed.appspot.com",
    messagingSenderId: "363422857001",
    appId: "1:363422857001:web:090521da517a2303fe6938",
    measurementId: "G-WC33PK3L1B"
  };

//   데이터 읽기 실습
// 1. 전체 조회된 결과 출력
//  - 테이블 태그 or 목록 태그를 활용해서 출력

// 2. 특정 사용자 조회
//  - id값 입력받은 후 해당 사용자의 email, nick 출력

// 파이어베이스 앱 초기화
const app = firebase.initializeApp(firebaseConfig);

// 파이어베이스 실시간 데이터베이스 생성
const database = firebase.database();

// 데이터 저장 실습
function writeUserData(userId, email, nick) {
    database.ref("users/"+userId).set({
      email: email,
      nick : nick
    });
}


// 데이터 읽기 실습
function readUserData(){
    database.ref("users/").on('value',(snapshot)=>{
    
        // 실시간 데이터베이스 값 접근
        console.log(snapshot.val());

        let data = snapshot.val();
        let keys = Object.keys(data);

        console.log(Object.keys(data));
        console.log(data["asd"]);
        console.log(data[keys[0]]);

        const result = document.getElementById("result");
        // 데이터베이스 웹 페이지 출력
        result.innerText = `${data[keys[0]].email} / ${data[keys[0]].nick}`;

        let array = [];

        for(i=0; i<keys.length; i++){
            array[i] = `${data[keys[i]].email} / ${data[keys[i]].nick}`;
        }
        result.innerHTML = array;

    });
}

function readUserData2(){
    database.ref("users/"+document.getElementById("input").value).on('value',(snapshot)=>{
        
        // 실시간 데이터베이스 값 접근
        console.log(snapshot.val());
        const result = document.getElementById("result");

        let data = snapshot.val();
        let keys = Object.keys(data);

        result.innerHTML = `${data.email}/ ${data.nick}`;
    });
}



///////////////////////////////////////////////////////////////////////////////
const btn = document.forms.btn;
const readBtn = document.getElementById("readBtn");

const btn2 = document.getElementById("btn2");
readBtn.addEventListener("click",()=>{
    readUserData();
});

btn.addEventListener("click",(event)=> {
    event.preventDefault();

    const id = document.forms.id.value;
    const email = document.forms.email.value;
    const nick = document.forms.nick.value;

    console.log(id, email, nick);

    writeUserData(id, email, nick);
});

btn2.addEventListener("click",()=> {
    readUserData2();
})
