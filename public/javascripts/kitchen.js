var arr = [{
        // name: "kitchen",
        image: "https://images.unsplash.com/photo-1631048498692-af6262577031?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        // name: "kit1",
        image: "https://images.unsplash.com/photo-1617850687451-ac13e5534ba6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        // name: "kit",
        image: "https://images.unsplash.com/photo-1538944570562-2c9cb7857097?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        // name: "kit",
        image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        // name: "kit",
        image: "https://images.unsplash.com/photo-1668910231038-e342ad670789?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        // name: "kit",
        image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        // name: "kit",
        image: "https://images.unsplash.com/photo-1676452722172-a73c8fc024c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        // name: "kit",
        image: "https://images.unsplash.com/photo-1699870798609-b5c3e7e5900d?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        // name: "kit",
        image: "https://plus.unsplash.com/premium_photo-1676321688609-bb955a90c8c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

function ShowCards() {
    var clutter = "";
    arr.forEach(function(obj) {
        clutter += `<div class="card-container">
    <div class="kitchen-card">
        <img  src=" ${obj.image}" alt="image" />
    </div>
</div>`;
    });

    //   console.log(clutter);
    document.querySelector(".card-container").innerHTML = clutter;
}
ShowCards();