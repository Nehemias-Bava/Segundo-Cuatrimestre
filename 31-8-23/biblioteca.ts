/*Definición del problema: Sistema de Gestión de Biblioteca
Crear un sistema de gestión de biblioteca que permita administrar libros, revistas y usuarios de la biblioteca. Los libros y revistas tienen propiedades como título, autor/editor, y año de publicación. Los usuarios de la biblioteca tienen propiedades como nombre, dirección y número de teléfono. El sistema debe permitir realizar préstamos y devoluciones de libros y revistas. */

class Publicacion {
    titulo: string;
    autorEditor: string;
    anoPublicacion: number;

    constructor(titulo: string, autorEditor: string, anoPublicacion: number) {
        this.titulo = titulo;
        this.autorEditor = autorEditor;
        this.anoPublicacion = anoPublicacion;
    }
}

class Libro extends Publicacion {
    constructor(titulo: string, autorEditor: string, anoPublicacion: number) {
        super(titulo, autorEditor, anoPublicacion);
    }
}

class Revista extends Publicacion {
    constructor(titulo: string, autorEditor: string, anoPublicacion: number) {
        super(titulo, autorEditor, anoPublicacion);
    }
}

class Usuario {
    nombre: string;
    direccion: string;
    numeroTelefono: string;

    constructor(nombre: string, direccion: string, numeroTelefono: string) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.numeroTelefono = numeroTelefono;
    }
}

class Biblioteca {
    catalogo: (Libro | Revista)[];
    usuarios: Usuario[];

    constructor() {
        this.catalogo = [];
        this.usuarios = [];
    }

    agregarPublicacion(publicacion: Libro | Revista) {
        this.catalogo.push(publicacion);
    }

    agregarUsuario(usuario: Usuario) {
        this.usuarios.push(usuario);
    }

    realizarPrestamo(publicacion: Libro | Revista, usuario: Usuario) {
    }

    realizarDevolucion(publicacion: Libro | Revista, usuario: Usuario) {
    }
}


const biblioteca = new Biblioteca();

const libro1 = new Libro("Título del Libro 1", "Autor 1", 2023);
const revista1 = new Revista("Título de la Revista 1", "Editor 1", 2023);

const usuario1 = new Usuario("Usuario 1", "Dirección 1", "123-456-7890");

biblioteca.agregarPublicacion(libro1);
biblioteca.agregarPublicacion(revista1);
biblioteca.agregarUsuario(usuario1);

biblioteca.realizarPrestamo(libro1, usuario1);
biblioteca.realizarDevolucion(libro1, usuario1);