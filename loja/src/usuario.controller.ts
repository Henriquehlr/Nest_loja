import { UsuarioRepository } from './usuario.repository';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('/usuarios')
export class UsuarioController {
  private UsuarioRepository = new UsuarioRepository();

  @Post()
  async criaUsuario(@Body() dadosDoUsuario) {
    this.UsuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }
}
