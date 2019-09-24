<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    protected $table = 'empleado';

    protected $fillable = ['nombres','apellidos','correo','documento','direccion','estado'];
    
}
