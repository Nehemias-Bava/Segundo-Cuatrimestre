/*Definición del problema: Sistema de Gestión de Biblioteca
Crear un sistema de gestión de biblioteca que permita administrar libros, revistas y usuarios de la biblioteca. Los libros y revistas tienen propiedades como título, autor/editor, y año de publicación. Los usuarios de la biblioteca tienen propiedades como nombre, dirección y número de teléfono. El sistema debe permitir realizar préstamos y devoluciones de libros y revistas. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Publicacion = /** @class */ (function () {
    function Publicacion(titulo, autorEditor, anoPublicacion) {
        this.titulo = titulo;
        this.autorEditor = autorEditor;
        this.anoPublicacion = anoPublicacion;
    }
    return Publicacion;
}());
var Libro = /** @class */ (function (_super) {
    __extends(Libro, _super);
    function Libro(titulo, autorEditor, anoPublicacion) {
        return _super.call(this, titulo, autorEditor, anoPublicacion) || this;
    }
    return Libro;
}(Publicacion));
var Revista = /** @class */ (function (_super) {
    __extends(Revista, _super);
    function Revista(titulo, autorEditor, anoPublicacion) {
        return _super.call(this, titulo, autorEditor, anoPublicacion) || this;
    }
    return Revista;
}(Publicacion));
var Usuario = /** @class */ (function () {
    function Usuario(nombre, direccion, numeroTelefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.numeroTelefono = numeroTelefono;
    }
    return Usuario;
}());
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.catalogo = [];
        this.usuarios = [];
    }
    Biblioteca.prototype.agregarPublicacion = function (publicacion) {
        this.catalogo.push(publicacion);
    };
    Biblioteca.prototype.agregarUsuario = function (usuario) {
        this.usuarios.push(usuario);
    };
    Biblioteca.prototype.realizarPrestamo = function (publicacion, usuario) {
        //para realizar el préstamo
    };
    Biblioteca.prototype.realizarDevolucion = function (publicacion) {
        //para realizar la devolución
    };
    return Biblioteca;
}());
var biblioteca = new Biblioteca();
var libro1 = new Libro("Título del Libro 1", "Autor 1", 2023);
var revista1 = new Revista("Título de la Revista 1", "Editor 1", 2023);
var usuario1 = new Usuario("Usuario 1", "Dirección 1", "123-456-7890");
biblioteca.agregarPublicacion(libro1);
biblioteca.agregarPublicacion(revista1);
biblioteca.agregarUsuario(usuario1);
biblioteca.realizarPrestamo(libro1, usuario1);
biblioteca.realizarDevolucion(libro1);
