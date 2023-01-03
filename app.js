let arr = [
        {
          brand: "Samsung",
          model: "a30",
          ram: "4gb",
          camera: "50px",
          price: 2000,
        },
        {
          brand: "Realme",
          model: "5i",
          ram: "8gb",
          camera: "55px",
          price: 3000,
        },
        {
          brand: "Oppo",
          model: "a80",
          ram: "10gb",
          camera: "560px",
          price: 9000,
        },
        {
            brand: "Vivo",
            model: "vivo10",
            ram: "220gb",
            camera: "360px",
            price: 15000,
          },
      ];
    let first = document.getElementById('first');
    let fop = document.getElementById('fop');
    let op1 = document.getElementById('op1');
    let ul = document.getElementById('ul');


    function abc(){
        let models = Object.keys(arr[0]);
        console.log(models)
        models.forEach((x) => (first.innerHTML += `<option>${x}</option>` ))

    }
    abc();




    function details(){
        let searchval = arr.filter((x) => x[first.value] == fop.value )
        console.log(searchval)
        searchval.forEach((x) => (ul.innerHTML += `<li><span>Mobile:</span> ${x.brand}<br><span>Model: </span>${x.model}<br>
        <span>Ram: </span>${x.ram}<br><span>Camera: </span>${x.camera}<br><span>Price: </span>${x.price}</li><br>`))
    }
