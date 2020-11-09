<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Departement;
use Illuminate\Support\Facades\Validator;

class DepartementController extends Controller
{

    public function  creat_departement(Request $request){

         $validator = Validator::make($request->all(), [
            'name' => 'required',
         ]);
         if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 404);
         }
         $departement = Departement::create([
            'name' => $request->get('name'),
         ]);
         $departement->save(); 
         return response()->json(['messages'=>'created']);
    }

    public function departements(){
        return  Departement::all();
    }
    // function Show Contenet
    public function show($id){
        // find with Id AND return ID
          $departement = Departement::find($id);
          return $departement;
    }

    // fUNCTION UPDATE 
    public function edit($id){
       $departement = Departement::find($id);
       return $departement;
    }

    // FUNCTION DELET 
    public function destroy($id){
        $departement = Departement::find($id);
        $departement->delete();
        return response()->json(['messages'=>'deleted']);
    }

}
