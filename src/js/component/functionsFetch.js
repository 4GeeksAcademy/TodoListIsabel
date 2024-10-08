export const peticionApiPost = (texto) => {
    fetch("https://playground.4geeks.com/todo/todos/isabel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        label: texto,
        is_done: false,
      }),
    }).then((data) => {
      console.log(data);
    });
  };
  
  export const crearUser = async (name) => {
    await fetch(`https://playground.4geeks.com/todo/users/${name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    }).then((data) => {
      console.log(data);
    });
  };