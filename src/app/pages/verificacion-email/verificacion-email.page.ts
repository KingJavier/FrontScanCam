import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-verificacion-email',
  templateUrl: './verificacion-email.page.html',
  styleUrls: ['./verificacion-email.page.scss'],
})
export class VerificacionEmailPage implements OnInit {

  constructor(
    private usuarioservicio: TaskService,
  ) { }

  ngOnInit() {
  }

  enviarcorreo(){
    const correo=localStorage.getItem('email');
    const body={email: correo};
    this.usuarioservicio.enviarcorreo(body).subscribe((res: any)=>{console.log(res);
    });
  }

}
