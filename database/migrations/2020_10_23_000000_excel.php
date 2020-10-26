<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Excel extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('excel_tables', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->index();
            $table->string('name');
            $table->string('description');
            $table->timestamp('created_at');
            $table->timestamp('updated_at');
        });

        Schema::create('excel_tables_cells', function (Blueprint $table) {
            $table->id();
            $table->integer('table_id');
            $table->integer('col');
            $table->integer('row');
            $table->string('type');
            $table->string('value');

            $table->foreign('table_id')
                ->references('id')
                ->on('excel_tables');
        });
    }

    /**
     * Reverse the migrations.
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('excel_tables');
        Schema::dropIfExists('excel_tables_cells');
    }
}
