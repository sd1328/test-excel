<?php
namespace App\Http\Controllers\Excel;

use App\Http\Controllers\Controller;
use App\Http\Requests\Excel\Cell as CellRequest;
use App\Http\Requests\Excel\CellsSearch as CellsSearchRequest;
use App\Models\Excel\TableModel;
use App\Service\Excel\Entity\Cell;
use App\Service\Excel\Service as ExcelService;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;

/**
 * Class ApiController
 *
 * @OA\Info(
 *     title="Тест - Web Excel API",
 *     version="1.0",
 *     description="Тестовое задание - редактор таблиц онлайн"
 * ),
 *
 * @OA\Schema(
 *     schema="ValidationError",
 *     @OA\Property(property="field", type="array", description="error", example={"You have some error by field"},
 *          @OA\Items(
 *              @OA\Schema(type="string", example="You have some error by field")
 *          )
 *      )
 * );
 *
 * @package App\Http\Controllers\Excel
 */
class ApiController extends Controller
{
    /**
     * @var bool - без аунтефикации
     */
    protected $hasGuest = true;

    /**
     * @var ExcelService
     */
    protected $excelService;

    /**
     * ApiController constructor.
     * @param ExcelService $excelService
     */
    public function __construct(ExcelService $excelService)
    {
        parent::__construct();
        $this->excelService = $excelService;
    }

    /**
     * @OA\Post(
     *     path="/table/{tableId}/editor/get",
     *     tags={"Получить ячейки таблицы согласно заданых координат"},
     *     @OA\Parameter(
     *      in="path",
     *      name="tableId",
     *      description="Идентификатор таблицы",
     *      required=true,
     *      @OA\Schema(
     *          type="integer"
     *      )
     *     ),
     *     @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/ApiRequestsCellSearch")
     *     ),
     *     @OA\Response(
     *      response="200",
     *      description="successful operation",
     *      @OA\JsonContent(
     *          @OA\Schema(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/CellEntity")
     *          )
     *      ),
     *     ),
     *     @OA\Response(
     *      response="404",
     *      description="Not Found",
     *     ),
     *     @OA\Response(
     *      response="422",
     *      description="Validation Error",
     *      @OA\JsonContent(ref="#/components/schemas/ValidationError")
     *     ),
     * )
     *
     * @param $id
     * @param CellsSearchRequest $cellsSearchRequest
     * @return JsonResponse
     * @throws ModelNotFoundException
     */
    public function get($id, CellsSearchRequest $cellsSearchRequest)
    {
        $tableModel = $this->findTable((int)$id);
        $data = [];
        /* @var Cell $cell */
        foreach ($this->excelService->getCells($tableModel, $cellsSearchRequest) as $cell) {
            $data[] = $cell->jsonSerialize();
        }
        return new JsonResponse($data);
    }

    /**
     *
     * @OA\Post(
     *     path="/table/{tableId}/editor/set",
     *     tags={"Изменить значение указанной ячейки"},
     *     @OA\Parameter(
     *      in="path",
     *      name="tableId",
     *      description="Идентификатор таблицы",
     *      required=true,
     *      @OA\Schema(
     *          type="integer"
     *      )
     *     ),
     *     @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/ApiRequestsCell")
     *     ),
     *     @OA\Response(
     *      response="200",
     *      description="successful operation"
     *     ),
     *     @OA\Response(
     *      response="404",
     *      description="Not Found",
     *     ),
     *     @OA\Response(
     *      response="422",
     *      description="Validation Error",
     *      @OA\JsonContent(ref="#/components/schemas/ValidationError")
     *     ),
     * )
     *
     * @param $id
     * @param CellRequest $cellRequest
     * @return JsonResponse
     * @throws ModelNotFoundException
     * @throws \Exception
     */
    public function store($id, CellRequest $cellRequest)
    {
        $tableModel = $this->findTable((int)$id);
        $this->excelService->cellChange($tableModel, $cellRequest);
        return new JsonResponse(['success']);

    }

    /**
     * @param int $id
     * @return TableModel
     * @throws ModelNotFoundException
     */
    protected function findTable(int $id): TableModel
    {
        $tableModel = TableModel::query()
            ->where('id', $id)
            ->first();
        if ($tableModel) {
            return $tableModel;
        } else {
            throw new ModelNotFoundException('Таблица не найденна, либо отсуствуют права на нее');
        }
    }
}
