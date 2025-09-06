function saveMemo() {
    const memo = document.getElementById('memoInput').value;
    const filenameInput = document.getElementById('filenameInput').value.trim();
    const filename = filenameInput || 'memo.txt';
    // 파일명 제한: 특수문자 및 확장자 검사
    const invalid = /[\\\/:\*\?"<>\|]/;
    if (invalid.test(filename)) {
        alert('파일명에 \\ / : * ? " < > | 문자를 사용할 수 없습니다.');
        return;
    }
    if (!filename.toLowerCase().endsWith('.txt')) {
        alert('파일명은 .txt 확장자로 끝나야 합니다.');
        return;
    }
    document.getElementById('savedMemo').textContent = memo;
    localStorage.setItem('Memo', memo);
    if(memo.includes('DanK314')) {
        alert('Easter Egg Found!');
    }

    // Create and download txt file
    const blob = new Blob([memo], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

window.onload = function() {
    const saved = localStorage.getItem('Memo');
    if (saved) {
        document.getElementById('savedMemo').textContent = saved;
        document.getElementById('memoInput').value = saved;
    }
    fetch('ElementaryEdu.txt')
        .then(response => response.text())
        .then(text => {
            document.getElementById('docContent').textContent = text;
        });
}
