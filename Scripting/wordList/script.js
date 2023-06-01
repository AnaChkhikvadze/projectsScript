function count() {
    let words = document.getElementById("task_list").value.split(" ");
    let dic = {};
    let ans = document.getElementById("ans");
    for (let i = 0; i < words.length; i++) {
        {
            var counter = 0;
            for (let j = 0; j < words.length; j++) {
                if (words[i] == words[j]) {
                    counter++;
                }
                dic[words[i]] = counter;
            }
        }
    }
    ans.innerHTML += JSON.stringify(dic);
    console.log(dic);
}
