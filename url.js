const CODE = {};
CODE['abcd'] = ['1234','1235','1546']
CODE['schw123as'] = ['1234','1235','1546']

const INFO = {};
INFO['abcd'] = {
    TARGET_URL : "https://projectedu.notion.site/ebd//2f83fe6cf25e808697cfd7a216a9a20b",
    PASSWORD : ['1234','1235','1546']
};

INFO['schw123as'] = {
    TARGET_URL : "https://projectedu.notion.site/ebd//2f73fe6cf25e80cea6dff00cb97cd3db",
    PASSWORD : ['1234','1235','1546']
}

const loginForm = document.getElementById('loginForm');
const loginOverlay = document.getElementById('loginOverlay');
const mainFrame = document.getElementById('mainFrame');
const errorMessage = document.getElementById('errorMessage');
const schoolcodeInput = document.getElementById('schoolcode');
const studentcodeInput = document.getElementById('studentcode');

window.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        showMainContent();
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const schoolcode = schoolcodeInput.value;
    const studentcode = studentcodeInput.value;

    if(schoolcode in INFO)
    {
        if(INFO[schoolcode].PASSWORD.includes(studentcode))
        {
            sessionStorage.setItem('isLoggedIn', 'true');
            errorMessage.classList.remove('show');
            showMainContent(schoolcode);
        }
        else
        {
            errorMessage.classList.add('show');
            schoolcodeInput.value = '';
            studentcodeInput.value = '';
            schoolcodeInput.focus();
        }
    }
    else
    {
        errorMessage.classList.add('show');
        schoolcodeInput.value = '';
        studentcodeInput.value = '';
        schoolcodeInput.focus();
    }

    // if (enteredPassword === CORRECT_PASSWORD1 || enteredPassword === CORRECT_PASSWORD2) {
    //     sessionStorage.setItem('isLoggedIn', 'true');
    //     errorMessage.classList.remove('show');
    //     showMainContent(enteredPassword);
    // } else {
    //     errorMessage.classList.add('show');
    //     schoolcodeInput.value = '';
    //     studentcodeInput.value = '';
    //     schoolcodeInput.focus();
    // }
});

function showMainContent(schoolcode) {
    mainFrame.src = INFO[schoolcode].TARGET_URL;
    // if(enteredPassword==CORRECT_PASSWORD1) {
    // mainFrame.src = TARGET_URL;
    // }
    // else {
    //     mainFrame.src = TARGET_URL1;
    // }
    loginOverlay.classList.add('hidden');
    mainFrame.classList.add('show');
}

// 페이지 새로고침 시 세션 유지 (선택사항)
// 세션 유지를 원하지 않으면 아래 코드 삭제
window.addEventListener('beforeunload', () => {
    // sessionStorage.removeItem('isLoggedIn'); // 이 줄의 주석을 해제하면 새로고침 시 재로그인 필요
});