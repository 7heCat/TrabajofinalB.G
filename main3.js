document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("productForm");
  const registerBtn = document.getElementById("registerBtn");
  const resetBtn = document.getElementById("resetBtn");

  registerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Validar formato de precio
      const pricePattern = /^\d+(\.\d{1,2})?$/;
      if (!pricePattern.test(data.price)) {
        alert("El precio debe estar en un formato válido.");
        return;
      }

      // Validar código del producto
      const codePattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d]{8,}$/;
      if (!codePattern.test(data.code)) {
        alert(
          "El código del producto debe tener al menos una minúscula, una mayúscula y dos números."
        );
        return;
      }

      // Crear un nuevo objeto con los datos del formulario
      const nuevoProducto = {
        nombre: data.name,
        categoria: data.category,
        imagen: data.image,
        codigoProducto: data.code,
        precio: parseFloat(data.price), // Convertir a número
        añoEstreno: parseInt(data.year), // Convertir a número entero
        duracion: data.duration,
      };

      // Obtener el array de productos del localStorage o inicializarlo si no existe
      let productos = obtenerDatos(KEY_LOCAL_STORAGE) || [];

      // Agregar el nuevo producto al array
      productos.push(nuevoProducto);

      // Guardar el array actualizado en el localStorage
      guardarDatos(KEY_LOCAL_STORAGE, productos);

      // Mostrar mensaje de éxito y redirigir a la página principal
      alert("Producto registrado con éxito");
      location.href = "Vistadeproductos.html";
    } else {
      // Mostrar mensaje si hay errores de validación
      alert("Por favor, complete todos los campos requeridos correctamente.");
      location.href = "indicaciones.html";
    }
  });

  resetBtn.addEventListener("click", () => {
    form.reset();
  });
});

const KEY_LOCAL_STORAGE = "datos";

function limpiarDatos() {
  localStorage.clear();
}

function guardarDatos(key, data) {
  const dataString = JSON.stringify(data);
  localStorage.setItem(key, dataString);
}

function obtenerDatos(key) {
  const dataString = localStorage.getItem(key);
  return JSON.parse(dataString);
}

function eliminarDatos(key) {
  localStorage.removeItem(key);
}

const saveData = document.getElementById("saveData");
const getData = document.getElementById("getData");
const deleteData = document.getElementById("deleteData");

saveData.addEventListener("click", () => guardarDatos(KEY_LOCAL_STORAGE, productos));
getData.addEventListener("click", () => { 
  const datos = obtenerDatos(KEY_LOCAL_STORAGE);
  console.log(datos);
});
deleteData.addEventListener("click", () => eliminarDatos(KEY_LOCAL_STORAGE));




const imagenes = [
  {
    Acción: "https://static.vecteezy.com/system/resources/previews/001/195/079/non_2x/action-board-png.png",
  },
  {
    Animación: "https://png.pngtree.com/png-clipart/20200512/ourmid/pngtree-neon-color-glossy-hand-painted-fragment-text-box-png-image_2203119.jpg",
  },
  {
    Aventura: "https://png.pngtree.com/png-vector/20201103/ourmid/pngtree-adventure-badge-line-art-illustration-png-image_2383388.jpg",
  },
  {
    Biografía: "https://cdn-icons-png.flaticon.com/512/2178/2178197.png",
  },
  {
    Comedia: "https://w7.pngwing.com/pngs/1016/450/png-transparent-computer-icons-comedy.png",
  },
  {
    Crimen: "https://png.pngtree.com/png-vector/20210417/ourmid/pngtree-crime-scene-cordon-png-image_3221995.jpg",
  },
  {
    Drama: "https://png.pngtree.com/element_our/sm/20180515/sm_63bc21d0da292c396b1268659edae3cf.jpg",
  },
  {
    Historia: "https://w7.pngwing.com/pngs/587/894/png-transparent-history-book-historical-society-l-e-a-p-classes-child-book-purple-child-text.png",
  },
  {
    Horror: "https://e7.pngegg.com/pngimages/439/1014/png-clipart-youtube-horror-desktop-high-definition-television-ghost-youtube-sticker-desktop-wallpaper-thumbnail.png",
  },
  {
    Misterio: "https://w7.pngwing.com/pngs/787/919/png-transparent-private-investigator-detective-mystery-shopping-service-computer-forensics-mysteries-miscellaneous-hat-black-thumbnail.png",
  },
  {
    Romance: "https://w7.pngwing.com/pngs/202/997/png-transparent-couple-silhouette-silhouette-couple-romance-break-up-love-animals-couple-thumbnail.png",
  },
  {
    Western: "https://www.creativefabrica.com/wp-content/uploads/2022/07/20/Will-And-Free-Cowboy-Country-Western-Png-Graphics-34505582-1-312x208.jpg",
  },
];
