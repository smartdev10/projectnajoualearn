<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'module_id',
        'description',
        'prerequisite',
        'difficulty_level',
        'document_path'
    ];

    public function formation()
    {
        return $this->belongsTo('App\Models\Module');
    }
}
