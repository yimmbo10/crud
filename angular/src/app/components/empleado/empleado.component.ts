import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
declare var $:any;

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleado:Empleado = {
    id:null,nombres:'',apellidos:null,correo:null,documento:null,direccion:null,estado:null
  }
  listado_emp:Empleado[];
  editar:boolean;
 // errors:any[];

  constructor(private empleadoSer:EmpleadoService) {}

  ngOnInit() {
    this.editar = false;
    this.list();
  }


  //funciones para crud usu...

  list(){
    this.empleadoSer.get_().subscribe((r)=>{
        this.listado_emp = r.json();
      },(e)=>{
          console.log(e);
      });
  }

  nuevo(){
    this.editar = false;
    this.open();
    $('.form-info')[0].reset();
  }

  edit(id){
    this.editar = true;
    this.empleadoSer.edit(id).subscribe((r)=>{
        this.empleado = r.json();
        this.open();
      },(e)=>{
          console.log(e);
      });
  }

  eliminar(id){
    this.empleadoSer.delete(id).subscribe((r)=>{
      this.list();
    },(e)=>{
        console.log(e);
    });
  }


  submit(){
    if(this.editar){
      this.empleadoSer.update(this.empleado.id, this.empleado).subscribe((r)=>{
        this.list();
        this.close_m();
        $('.form-info')[0].reset();
      },(e)=>{
         // this.errors = r.json()['nombres'][0];
          //console.log(this.errors);
      });  
    }else{
      this.empleadoSer.create(this.empleado).subscribe((r)=>{
        this.list();
        this.close_m();
        $('.form-info')[0].reset();
      },(e)=>{
          console.log(e);
      });
    }
  }

  //Modal
  open(){
    $('#modal-usuario').modal('show');
  }
  close_m(){
    $('#modal-usuario').modal('hide');
  }

}
