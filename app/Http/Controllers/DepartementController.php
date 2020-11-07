<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Departement;

class DepartementController extends Controller
{
    public function  creat_departement(Request $request){
     return $request;
     Departement::all();
    }

    public function departements()
    {
        return  Departement::all();
        
    }

    // creat add departements 
    public function  creat_deppartement(Request $request)
    {
        return $request;
    }

    // creat add departement
        public function store(Request $request)
    {
        // Validation insert in deppartement
       /* $this->validate($request, [
            'name'=> 'name|integer',
        ]); */

        // Insert in Departement
        $departement = new Departement([
            'id' => $request->get('id'),
            'name'=> $request->get('name'),
            'created_at'=> $request->get('created_at'),
            'updated_at'=> $request->get('updated_at')
        ]);

      $departement->save();
    }

    // function Show Contenet
    public function show($id)
    {
        // find with Id AND return ID
          $departement = Departement::find($id);
          return $departement;
        }

    // fUNCTION UPDATE 
    public function edit($id)
    {
        // select * from Departement where id = $id
        $departement = Departement::find($id);
        // departement/edit.blade.php avec le paramètre departement
       // return view('departement.edit', compact('departements'));
       return $departement;
    }

    // FUNCTION DELET 
    public function destroy($id)
    {
        $departement = Departement::find($id);
        $departement->delete();
        //delete from departement  where id = $id
    }

}
