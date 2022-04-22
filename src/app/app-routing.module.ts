/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CheckRoleGuard } from'./shared/guards/check-role.guard';
import { CheckRoleAprendizGuard } from'./shared/guards/check-role-aprendiz.guard';
import { CheckRoleFuncionarioGuard} from'./shared/guards/check-role-funcionario.guard';
import { CheckRoleGestorGuard } from'./shared/guards/check-role-gestor.guard';
import { CheckRoleInvitadoGuard} from'./shared/guards/check-role-invitado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verificacion-email',
    loadChildren: () => import('./pages/verificacion-email/verificacion-email.module').then( m => m.VerificacionEmailPageModule)
  },
  {
    path: 'actufoto',
    loadChildren: () => import('./pages/certificado/actufoto.module').then( m => m.ActufotoPageModule)
  },
  {
    path: 'actufotoaprendiz',
    loadChildren: () => import('./pages/rolaprendiz/actufotoaprendiz/actufotoaprendiz.module').then( m => m.ActufotoaprendizPageModule),
    canActivate:[CheckRoleAprendizGuard]
  },
  {
    path: 'entrenmaquiaprendiz',
    loadChildren: () => import('./pages/rolaprendiz/entrenmaquiaprendiz/entrenmaquiaprendiz.module').then( m => m.EntrenmaquiaprendizPageModule),
    canActivate:[CheckRoleAprendizGuard]
  },
  {
    path: 'inicioapre',
    loadChildren: () => import('./pages/rolaprendiz/inicioapre/inicio.module').then( m => m.InicioPageModule),
    canActivate:[CheckRoleAprendizGuard]
  },
  {
    path: 'perfilaprendiz',
    loadChildren: () => import('./pages/rolaprendiz/perfilaprendiz/perfilaprendiz.module').then( m => m.PerfilaprendizPageModule),
    canActivate:[CheckRoleAprendizGuard]
  },
  {
    path: 'actufotofuncionario',
    loadChildren: () => import('./pages/rolfuncionario/actufotofuncionario/actufotofuncionario.module').then( m => m.ActufotofuncionarioPageModule),
    canActivate:[CheckRoleFuncionarioGuard]
  },
  {
    path: 'entrenmaquifuncionario',
    loadChildren: () => import('./pages/rolfuncionario/entrenmaquifuncionario/entrenmaquifuncionario.module').then( m => m.EntrenmaquifuncionarioPageModule),
    canActivate:[CheckRoleFuncionarioGuard]
  },
  {
    path: 'iniciofun',
    loadChildren: () => import('./pages/rolfuncionario/iniciofun/inicio.module').then( m => m.InicioPageModule),
    canActivate:[CheckRoleFuncionarioGuard]
  },
  {
    path: 'perfilfuncionario',
    loadChildren: () => import('./pages/rolfuncionario/perfilfuncionario/perfilfuncionario.module').then( m => m.PerfilfuncionarioPageModule),
    canActivate:[CheckRoleFuncionarioGuard]
  },
  {
    path: 'actufotogestor',
    loadChildren: () => import('./pages/rolgest/actufotogestor/actufotogestor.module').then( m => m.ActufotogestorPageModule),
    canActivate:[CheckRoleGestorGuard]
  },
  {
    path: 'entrenmaquina',
    loadChildren: () => import('./pages/rolgest/entrenmaquina/entrenmaquina.module').then( m => m.EntrenmaquinaPageModule),
    canActivate:[CheckRoleGestorGuard]
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./pages/rolgest/estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule),
    canActivate:[CheckRoleGestorGuard]
  },
  {
    path: 'inicioges',
    loadChildren: () => import('./pages/rolgest/inicioges/inicio.module').then( m => m.InicioPageModule),
    canActivate:[CheckRoleGestorGuard]
  },
  {
    path: 'listado',
    loadChildren: () => import('./pages/rolgest/listado/listado.module').then( m => m.ListadoPageModule),
    canActivate:[CheckRoleGestorGuard]
  },
  {
    path: 'perfilgestor',
    loadChildren: () => import('./pages/rolgest/perfilgestor/perfilgestor.module').then( m => m.PerfilgestorPageModule),
    canActivate:[CheckRoleGestorGuard]
  },
  {
    path: 'actufotoseguridad',
    loadChildren: () => import('./pages/rolsecurity/actufotoseguridad/actufotoseguridad.module').then( m => m.ActufotoseguridadPageModule),
    canActivate:[CheckRoleGuard]
  },
  {
    path: 'camaraescaner',
    loadChildren: () => import('./pages/rolsecurity/camaraescaner/camaraescaner.module').then( m => m.CamaraescanerPageModule)
  },
  {
    path: 'entrenarmaquina',
    loadChildren: () => import('./pages/rolsecurity/entrenarmaquina/entrenarmaquina.module').then( m => m.EntrenarmaquinaPageModule),
    canActivate:[CheckRoleGuard]
  },
  {
    path: 'escanearqr',
    loadChildren: () => import('./pages/rolsecurity/escanearqr/escanearqr.module').then( m => m.EscanearqrPageModule),

  },
  {
    path: 'listadoseguridad',
    loadChildren: () => import('./pages/rolsecurity/listadoseguridad/listadoseguridad.module').then( m => m.ListadoseguridadPageModule),
    canActivate:[CheckRoleGuard]
  },
  {
    path: 'perfilseguridad',
    loadChildren: () => import('./pages/rolsecurity/perfilseguridad/perfilseguridad.module').then( m => m.PerfilseguridadPageModule),
    canActivate:[CheckRoleGuard]
  },
  {
    path: 'registroinvitado',
    loadChildren: () => import('./pages/rolsecurity/registroinvitado/registroinvitado.module').then( m => m.RegistroinvitadoPageModule),
    canActivate:[CheckRoleGuard]
  },
  {
    path: 'rolseguridad',
    loadChildren: () => import('./pages/rolsecurity/rolseguridad/rolseguridad.module').then( m => m.RolseguridadPageModule),
    canActivate:[CheckRoleGuard]
  },
  {
    path: 'inicioinv',
    loadChildren: () => import('./pages/rolinvit/inicioinv/inicio.module').then( m => m.InicioPageModule),
    canActivate:[CheckRoleInvitadoGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/rolinvit/qr/qr.module').then( m => m.QrPageModule),
    canActivate:[CheckRoleInvitadoGuard]
  },
  {
    path: 'cambiocontrasena',
    loadChildren: () => import('./pages/cambiocontrasena/cambiocontrasena.module').then( m => m.CambiocontrasenaPageModule)
  },
  {
    path: 'perfilinvitado',
    loadChildren: () => import('./pages/rolinvit/perfilinvitado/perfilinvitado.module').then( m => m.PerfilinvitadoPageModule),
    canActivate:[CheckRoleInvitadoGuard]
  },
  {
    path: 'entrenmaquiinvitado',
    loadChildren: () => import('./pages/rolinvit/entrenmaquiinvitado/entrenmaquiinvitado.module').then( m => m.EntrenmaquiinvitadoPageModule),
    canActivate:[CheckRoleInvitadoGuard]
  },
  {
    path: 'actufotoinvitado',
    loadChildren: () => import('./pages/rolinvit/actufotoinvitado/actufotoinvitado.module').then( m => m.ActufotoinvitadoPageModule),
    canActivate:[CheckRoleInvitadoGuard]
  },
  {
    path: 'camaraescanersalida',
    loadChildren: () => import('./pages/rolsecurity/camaraescanersalida/camaraescanersalida.module').then( m => m.CamaraescanersalidaPageModule),
    canActivate:[CheckRoleGuard]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
