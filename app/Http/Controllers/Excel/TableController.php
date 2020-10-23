<?php
namespace App\Http\Controllers\Excel;

use App\Http\Controllers\Controller;
use App\Http\Requests\Excel\TableForm;
use App\Models\Excel\TableModel;
use Illuminate\Database\Eloquent\ModelNotFoundException as NotFound;
use Illuminate\Support\Facades\Auth;

/**
 * Class TableController
 * @package App\Http\Controllers\Excel
 */
class TableController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $page = request()->input('page', 1);
        $pageSize = 10;
        $num = ($page - 1) * $pageSize;
        $tables = TableModel::query()
            ->where('user_id', Auth::id())
            ->paginate($pageSize);

        return view(
            'table.list',
            [
                'tables' => $tables,
                'num' => $num,
            ]
        );
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function editor($id)
    {
        return view('table.editor', [
            'table' => $this->findTable((int)$id)
        ]);
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function storeShow()
    {
        return view('table.store');
    }

    /**
     * @param TableForm $tableForm
     * @return mixed
     */
    public function store(TableForm $tableForm)
    {
        $model = new TableModel();
        $model->user_id = Auth::id();
        $model->fill($tableForm->validated());

        if ($model->save()) {
            $message = 'Успешно создана';
        } else {
            $message = 'Ошибка';
        }
        return redirect()->route('excel.crud.list', app()->getLocale())->withMessage($message);
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws NotFound
     */
    public function updateShow($id)
    {
        return view('table.update', [
            'table' => $this->findTable((int)$id)
        ]);
    }

    /**
     * @param $id
     * @param TableForm $tableForm
     * @return mixed
     * @throws NotFound
     */
    public function update($id, TableForm $tableForm)
    {
        $model = $this->findTable((int)$id);
        $model->fill($tableForm->validated());
        if ($model->save()) {
            $message = 'Успешно изменена';
        } else {
            $message = 'Ошибка';
        }
        return redirect()->route('excel.crud.list', app()->getLocale())->withMessage($message);
    }

    /**
     * @param $id
     * @return mixed
     * @throws NotFound
     * @throws \Exception
     */
    public function destroy($id)
    {
        $model = $this->findTable((int)$id);
        if ($model->delete()) {
            $message = 'Успешно удалена';
        } else {
            $message = 'Ошибка';
        }
        return redirect()->route('excel.crud.list', app()->getLocale())->withMessage($message);
    }

    /**
     * @param int $id
     * @return TableModel
     * @throws NotFound
     */
    protected function findTable(int $id): TableModel
    {
        $tableModel = TableModel::query()
            ->where('id', $id)
            ->first();
        if ($tableModel) {
            return $tableModel;
        } else {
            throw new NotFound('Таблица не найденна, либо отсуствуют права на нее');
        }
    }
}
