<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'category_id',
        'collection_id',
        'name',
        'price',
        'count',
        'description',
        'images',
    ];
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function collection()
    {
        return $this->belongsTo(Collection::class);
    }
    protected function casts(): array
    {
        return [
            'images' => 'array',
            'price' => 'decimal:2',
        ];
    }
}
