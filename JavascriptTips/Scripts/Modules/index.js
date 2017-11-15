//@ts-check
import { Pessoa } from './Classes/Pessoa';
import { Engenheiro } from './Classes/Engenheiro';

(function () {
    console.log("----------Pessoa----------")
    let pessoa = new Pessoa("John", 24);
    pessoa.seApresenta();
    pessoa.add(5, 7);
    console.log("--------------------------")

    console.log("--------Engenehrio--------")
    let engenheiro = new Engenheiro("Robert", 48, "de Computação");
    engenheiro.seApresenta();
    engenheiro.add(5, 7);
    console.log("--------------------------")
})();