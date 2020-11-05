<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Departement;

class DepartementController extends Controller
{
    public function  creat_departement(Request $request){
     return $request;
    }

    public function departements()
    {
        return  Departement::all();
        
    }


}
