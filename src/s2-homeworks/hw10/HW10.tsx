import { useDispatch, useSelector } from "react-redux";
import s2 from "../../s1-main/App.module.css";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import { AppDispatch, AppStoreType } from "./bll/store";
import { Loader } from "./Loader";
import { loadingAC } from "./bll/loadingReducer";

/*
 * 1 - в файле loadingReducer.ts дописать типы и логику
 * 2 - получить isLoading из редакса
 * 3 - дописать функцию setLoading
 * 4 - сделать стили в соответствии с дизайном
 * */

const HW10 = () => {
  const isLoading = useSelector((state: AppStoreType) => state.loading.isLoading);
  // useSelector, useDispatch // пишет студент
  const dispatch = useDispatch<AppDispatch>();
  const setLoading = () => {
    // пишет студент // показать крутилку на 1,5 секунд
    // dispatch
   dispatch(loadingAC(true));
   setTimeout(()=>{
    dispatch(loadingAC(false));
   },1500)
    // setTimeout
  };

  return (
    <div id={"hw10"}>
      <div className={s2.hwTitle}>Homework #10</div>

      <div className={s2.hw}>
        {isLoading ? (
          <div id={"hw10-loading"}>
            <Loader />
          </div>
        ) : (
          <SuperButton id={"hw10-button-start-loading"} onClick={setLoading}>
            Set loading...
          </SuperButton>
        )}
      </div>
    </div>
  );
};

export default HW10;
