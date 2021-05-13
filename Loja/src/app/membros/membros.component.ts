import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.css']
})
export class MembrosComponent implements OnInit {

  Loja='Pdvlopes Sistemas';
  Produto = 'Micro computador Aton';
  Preco = '15,50';
  Contato ='(21)3249-3331'

  constructor() { 
  
}


  ngOnInit(): void {
  }

}
