<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableAuthorNationality extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('author_nationality', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('author_id')
                  ->constrained()
                  ->onUpdate('cascade')
                  ->onDelete('cascade');
                  $table->string('title');
            $table->foreignId('nationality_id')
                  ->constrained()
                  ->onUpdate('cascade')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('author_nationality');
    }
}
