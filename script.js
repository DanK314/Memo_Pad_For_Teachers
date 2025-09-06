function saveMemo() {
    const memo = document.getElementById('memoInput').value;
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
    a.download = 'memo.txt';
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
}