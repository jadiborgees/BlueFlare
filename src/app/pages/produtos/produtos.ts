import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  produtoSelecionado: any = null;

 produtos = [
  {
    nome: 'ULTRA WHEY PROTEIN',
    categoria: 'ISOLADO + HIDROLISADO',
    preco: 'R$ 249,90',
    imagem: 'assets/images/Ultra Lean Whey.png',
    descricao: 'Proteína premium de alta absorção, ideal para recuperação muscular e ganho de massa magra.',
    detalhes: ['25g de proteína por dose', 'Sabor chocolate', 'Alta solubilidade', 'Fórmula premium']
  },
  {
    nome: 'CREATINE PURE',
    categoria: '100% MICRONIZADA',
    preco: 'R$ 129,90',
    imagem: 'assets/images/creatina-blueflare.png',
    descricao: 'Creatina pura para aumento de força, potência e desempenho nos treinos.',
    detalhes: ['100% pura', '5g por dose', 'Sem adição de açúcar', 'Alta performance']
  },
  {
    nome: 'MAX PRE-WORKOUT',
    categoria: 'FOCO E EXPLOSÃO',
    preco: 'R$ 189,90',
    imagem: 'assets/images/pre-treino.png',
    descricao: 'Pré-treino desenvolvido para energia, foco e intensidade durante o treino.',
    detalhes: ['Mais energia', 'Foco cognitivo', 'Explosão muscular', 'Alta intensidade']
  },
  {
    nome: 'ULTRA WHEY GOLD',
    categoria: 'ALTA ABSORÇÃO',
    preco: 'R$ 269,90',
    imagem: 'assets/images/Ultra Lean Whey.png',
    descricao: 'Whey premium para quem busca recuperação rápida e evolução muscular consistente.',
    detalhes: ['Blend proteico avançado', 'Baixo teor de açúcar', 'Textura cremosa', 'Ideal para pós-treino']
  },
  {
    nome: 'CREATINE BLACK',
    categoria: 'FORÇA E POTÊNCIA',
    preco: 'R$ 139,90',
    imagem: 'assets/images/creatina-blueflare.png',
    descricao: 'Creatina micronizada para treinos intensos, força máxima e performance diária.',
    detalhes: ['Alta pureza', 'Melhora de desempenho', 'Uso diário', 'Sem sabor']
  },
  {
    nome: 'PRE WORKOUT EXTREME',
    categoria: 'ENERGIA EXTREMA',
    preco: 'R$ 199,90',
    imagem: 'assets/images/pre-treino.png',
    descricao: 'Pré-treino intenso para foco, energia e explosão em treinos de alta performance.',
    detalhes: ['Energia rápida', 'Foco mental', 'Resistência', 'Performance explosiva']
  }
];
  abrirProduto(produto: any) {
    this.produtoSelecionado = produto;
  }

  fecharProduto() {
    this.produtoSelecionado = null;
  }
}