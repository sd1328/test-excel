@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        Таблицы
                        <br>
                        <a href="{{ route('excel.crud.create.show') }}" class="btn btn-primary float-right" title="Создать">Создать</a>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Название</th>
                                    <th>Описание</th>
                                    <th>Создано</th>
                                    <th>Изменено</th>
                                    <th colspan="3"> </th>
                                </tr>
                            </thead>
                            <tbody>
                            @foreach ($tables as $table)
                                <tr>
                                    <td>{{ $table->id }}</td>
                                    <td>{{ $table->name }}</td>
                                    <td>{{ $table->description }}</td>
                                    <td>{{ $table->created_at }}</td>
                                    <td>{{ $table->updated_at }}</td>
                                    <td>
                                        <a href="{{ route('excel.crud.update.show', [$table->id]) }}" class="btn btn-success " title="Описание">
                                            Описание
                                        </a>
                                    </td>
                                    <td>
                                        <a href="{{ route('excel.editor', [$table->id]) }}" class="btn btn-info" title="Редактор">
                                            Редактор
                                        </a>
                                    </td>
                                    <td>
                                        <a href="{{ route('excel.crud.remove', [$table->id]) }}" class="btn btn-danger " title="Удалить">
                                            Удалить
                                        </a>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        {!! $tables->links() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection