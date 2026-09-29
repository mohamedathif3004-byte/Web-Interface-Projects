let count = 0;

function updateCount() {
    document.getElementById("count").innerText = count;
    console.log("Effect happened");
}

function increment() {
    count++;
    updateCount();
}

function decrement() {
    count--;
    updateCount();
}

function resetCount() {
    count = 0;
    updateCount();
}

updateCount();