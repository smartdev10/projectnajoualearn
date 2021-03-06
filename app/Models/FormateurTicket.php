<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormateurTicket extends Model
{
    use HasFactory;

    public function formateur()
    {
        return $this->belongsTo('App\Models\Formateur');
    }
}
