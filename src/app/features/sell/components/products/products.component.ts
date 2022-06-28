import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = 'Produtos'

  produtos: Array<Product> = [
    {
    imagem : "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3e525bcb-0342-46da-93c8-28f5ef22e75a.__CR0,0,300,300_PT0_SX300_V1___.jpg",
    descricao: "Playstation 5 1TB" ,
    preco : 4500,
    quantidade: 3,
    emPromocao: true,
  },
  {
    imagem: "https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$",
    descricao: "Playstation 4",
    preco : 1700,
    quantidade: 4,
    emPromocao: true
  },
  {
    imagem: "https://upload.wikimedia.org/wikipedia/commons/9/95/PSX-Console-wController.png",
    descricao: "Playstation 1",
    preco : 3000,
    quantidade: 1,
    emPromocao: false
  },
  {
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/02/N64-Console-Set.png",
    descricao: "Super Nintendo 64",
    preco : 50000,
    quantidade: 0,
    emPromocao: false
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
