import { useForm } from "react-hook-form";
import { InputField } from "../components/ui/InputField";
import { getDoctors, getRegions, getSpecialties } from "../api/DoctorAPI";
import { useMemo, useState } from "react";

import DataGrid, { Column, Paging, Pager } from "devextreme-react/data-grid";
import CustomStore from "devextreme/data/custom_store";
import "devextreme/dist/css/dx.light.css";
import SelectInput from "../components/ui/SelectInput";
import ButtonFilter from "../components/ui/ButtonFilter";
import { useQuery } from "react-query";
import { IoReload } from "react-icons/io5";

const HomePage = () => {
  const { control, handleSubmit, setValue } = useForm();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [filters, setFilters] = useState<any[]>([]);
  const allowedPageSizes = [20, 50, 100, 500];

  function isNotEmpty(value: any) {
    return value !== undefined && value !== null && value !== "";
  }

  // fetch de datos
  const {
    data: regions,
    isError: isErrorRegions,
    isLoading: isLoadingRegions,
  } = useQuery({
    queryFn: getRegions,
    queryKey: ["regions"],
    onError: (error: any) => {
      setErrorMsg(error?.message || "Error al cargar regiones");
    },
  });

  const {
    data: specialties,
    isError: isErrorSpecialties,
    isLoading: isLoadingSpecialties,
  } = useQuery({
    queryFn: getSpecialties,
    queryKey: ["specialties"],
    onError: (error: any) => {
      setErrorMsg(error?.message || "Error al cargar especialidades");
    },
  });

  const doctorsStore = useMemo(
    () =>
      new CustomStore({
        key: "id",
        async load(loadOptions) {
          setErrorMsg(null); // Limpiar error al intentar cargar
          const params: any = {};
          if (isNotEmpty(loadOptions.skip)) params.skip = loadOptions.skip;
          if (isNotEmpty(loadOptions.take)) params.take = loadOptions.take;
          if (isNotEmpty(loadOptions.requireTotalCount))
            params.requireTotalCount = loadOptions.requireTotalCount;
          if (isNotEmpty(loadOptions.sort)) params.sort = loadOptions.sort;
          if (isNotEmpty(filters)) params.filter = [filters];

          try {
            const response = await getDoctors(
              params.take,
              params.skip,
              params.requireTotalCount,
              params.sort,
              params.filter
            );
            return {
              data: response.doctors,
              totalCount: response.count,
            };
          } catch (err: any) {
            setErrorMsg(
              err?.message || "Error al cargar los datos de la tabla médicos"
            );
            throw err;
          }
        },
      }),
    [filters]
  );

  const onSubmit = (values: any) => {
    setFilters(values);
    setValue("name", "");
  };

  const sortedRegions = useMemo(() => {
    return (
      regions?.sort((a: any, b: any) => a.nombre.localeCompare(b.nombre)) || []
    );
  }, [regions]);

  const finalColumns = [
    <Column key="id" dataField="id" caption="ID" width={100} visible={true} />,
    <Column
      key="cdgMed"
      dataField="cdgMed"
      caption="Código Medico"
      width={250}
      alignment="center"
    />,
    <Column key="nombre" dataField="nombre" caption="Nombre" width={250} />,
    <Column
      key="especialidad"
      dataField="especialidad"
      caption="Especialidad"
      width={250}
    />,
    <Column key="region" dataField="region" caption="Región" width={250} />,
    <Column key="barrio" dataField="barrio" caption="Barrio" width={250} />,
    <Column key="calle" dataField="calle" caption="Calle" width={250} />,
    <Column key="zona" dataField="zona" caption="Zona" width={250} />,
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <div className="w-full mt-8 mb-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col md:flex-row gap-4 md:gap-6 bg-white/90 p-6 rounded-2xl shadow-xl  items-end md:items-center"
        >
          <div className="w-full">
            <InputField
              name="name"
              control={control}
              label="Buscar por nombre"
              placeholder="ej: Juan Pérez"
              disabled={false}
            />
          </div>
          <div className="w-full ">
            <SelectInput
              name="especialidad"
              control={control}
              label="Especialidad"
              dataSource={specialties || []}
              isLoading={isLoadingSpecialties}
              isError={isErrorSpecialties}
              valueExpr="id"
              displayExpr="nombre"
              placeholder="Seleccionar especialidad"
            />
          </div>
          <div className="w-full ">
            <SelectInput
              name="region"
              control={control}
              label="Región"
              valueExpr="id"
              displayExpr="nombre"
              dataSource={sortedRegions || []}
              isLoading={isLoadingRegions}
              isError={isErrorRegions}
              placeholder="Seleccionar región"
              disabled={isLoadingRegions || isErrorRegions}
            />
          </div>
          <div className="mx-auto sm:mt-4 ">
            <ButtonFilter text="Filtrar" />
          </div>
        </form>
      </div>

      <div className="w-full bg-white/90 rounded-2xl shadow-xl p-6">
        {errorMsg ? (
          <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-500 text-red-700 font-semibold text-center animate-fade-in flex flex-col items-center">
            <div className="text-sm font-normal mb-2">{errorMsg}</div>
            <button
              className="mt-1 px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition-colors flex items-center gap-2"
              onClick={() => {
                setErrorMsg(null);
                doctorsStore.load();
              }}
            >
              <IoReload className="text-white" />
              <span>Reintentar</span>
            </button>
          </div>
        ) : (
          <DataGrid
            dataSource={doctorsStore}
            remoteOperations={true}
            className="overscroll-auto h-[70vh] w-full"
            allowColumnReordering={true}
            allowColumnResizing={true}
            showBorders={true}
            showColumnLines={true}
            showRowLines={true}
            columnAutoWidth={true}
            onDataErrorOccurred={() => {
              setErrorMsg("Error al cargar los datos de la tabla médicos");
            }}
          >
            {finalColumns}
            <Paging defaultPageSize={50} />
            <Pager
              allowedPageSizes={allowedPageSizes}
              visible={true}
              showPageSizeSelector={true}
            />
          </DataGrid>
        )}
      </div>
    </div>
  );
};
export default HomePage;
