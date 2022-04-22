import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckRoleGuard implements CanActivate {
   constructor(
    private authSvc: TaskService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const role = localStorage.getItem('role');
    console.log('Esta veriable si la trae', role);

    // eslint-disable-next-line no-cond-assign
    if (role !== 'seguridad') {
      this.router.navigate(['home']);
      // Si devolvemos FALSE no de permitirá el acceso
      return false;
    } else {
      return true;
    }
  }
  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing

}
