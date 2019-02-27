import { Injectable } from "@angular/core";

declare var document: any;
declare var MdSinapsePrescricao: any;
declare var MdHub: any;

@Injectable()
export class ScriptService {
  load(token) {
    let script = document.createElement('script') ;
    let idScript = 'sinapseMemed';

    script.type = 'text/javascript';
    script.id = idScript;
    script.src = 'http://sandbox.memed.com.br/modulos/plataforma.sinapse-prescricao/build/sinapse-prescricao.min.js';
    script.setAttribute('data-token', token);
    // script.setAttribute('data-container', 'ID-DO-CONTAINER');

    script.onload = () => {
      this.initEventsMemed();
    };
    document.body.appendChild(script);
  }

  initEventsMemed() {
    MdSinapsePrescricao.event.add('core:moduleInit', (module) => {
      // O módulo da prescrição foi iniciado.
      if (module.name === 'plataforma.prescricao') {

        // AQUI VOCE PODE REMOVER O LOADER DE ALGUM BOTÃO
        // AQUI VOCE PODE ADICIONAR UM LISTENER NO BOTÃO PARA ABRIR A PRESCRICAO.

        MdHub.command.send(module.name, 'setPaciente', {
          nome: 'José da Silva',
          endereco: 'Rua da Saúde, 123',
          cidade: 'São Paulo',
          telefone: '11960467098',
          peso: 75,
          altura: 1.80,
          nome_mae: 'Nome da mãe',
          dificuldade_locomocao: true,
          idExterno: 'some_encoded_data_or_hash_or_id'
        }).then(() => {
          MdHub.module.show(module.name)
        });
      }
    });
  }
}
