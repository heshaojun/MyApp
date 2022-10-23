<!-- 添加新工作 -->
<script setup name="addNewWork">
import { useRouter } from "vue-router";
import { onMounted, reactive, ref } from "vue";

const router = useRouter();
const newWorkForm = reactive({
  workName: null,
  workType: null,
  workHandler: null,
  workHandlerName: null,
  workChecker: null,
  workCheckerName: null,
  workStation: null,
  workStationName: null,
  startTimeInPlan: null,
  endTimeInPlan: null,
  workContent: null,
});
//表单验证规则
const newWorkFormRules = reactive({
  workName: [{ required: true, message: "请填写工作名称" }],
  workType: [{ required: true, message: "请选择工作类型" }],
  workStation: [{ required: true, message: "请选择工作的场站" }],
  workHandler: [{ required: true, message: "请指定工作执行人" }],
  workChecker: [{ required: true, message: "请指定工作验收人" }],
  startTimeInPlan: [{ required: true, message: "请选择工作计划开始时间" }],
  endTimeInPlan: [{ required: true, message: "请选择工作计划完成时间" }],
  workContent: [{ required: true, message: "请填写工作内容" }],
});
//可用站点选择
const showStationOption = ref(false);
const stationOption = ref();
const stationOptionLoading = ref(false);
//加载可以选择的场站
const loadAccessStation_ = () => {
  stationOptionLoading.value = true;
};
const stationSelected_ = (option) => {
  if (option) {
    newWorkForm.workStation = option.stationId;
    newWorkForm.workStationName = option;
  }
  showStationOption.value = false;
};
//可用执行人选择
const showHandlerOption = ref(false);
const handlerOption = ref();
const handlerOptionLoading = ref(false);
//加载可以选择的执行人
const loadAccessHandler_ = () => {
  handlerOptionLoading.value = true;
};
const handlerSelected_ = (option) => {
  if (option) {
    newWorkForm.workHandler = option.userId;
    newWorkForm.workHandlerName = option.userName;
  }
  showHandlerOption.value = false;
};
//可用审批人选择
const showCheckerOption = ref(false);
const checkerOption = ref();
const checkerOptionLoading = ref(false);
//加载可以选择的审批人
const loadAccessChecker_ = () => {
  checkerOptionLoading.value = true;
};
const checkerSelected_ = (option) => {
  if (option) {
  }
};
//
const dateTimeFormatter_ = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + "";
  month = month.length == 1 ? "0" + month : month;
  let days = date.getDate() + "";
  days = days.length == 1 ? "0" + days : days;
  let hours = date.getHours() + "";
  hours = hours.length == 1 ? "0" + hours : hours;
  let minutes = date.getMinutes() + "";
  minutes = minutes.length == 1 ? "0" + minutes : minutes;
  let seconds = date.getSeconds() + "";
  seconds = seconds.length == 1 ? "0" + seconds : seconds;
  return (
    year +
    "-" +
    month +
    "-" +
    days +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds
  );
};
const dateTimeParser_ = (timeStr) => {
  let dateTimeParts = timeStr.split(" ");
  let dateParts = dateTimeParts[0].split("-");
  let timeParts = dateTimeParts[1].split(":");
  let date = new Date();
  date.setFullYear(dateParts[0]);
  date.setMonth(dateParts[1]);
  date.setDate(dateParts[2]);
  date.setHours(timeParts[0]);
  date.setMinutes(timeParts[1]);
  date.setSeconds(timeParts[2]);
  return date;
};
//开始时间选择
const showStartTimePicker = ref(false);
const startTimeSelected_ = (option) => {
  if (option) {
    newWorkForm.startTimeInPlan = dateTimeFormatter_(option);
  }
  showStartTimePicker.value = false;
};
//截止时间选择
const showEndTimePicker = ref(false);
const endTimeSelected_ = (option) => {
  if (option) {
    newWorkForm.endTimeInPlan = dateTimeFormatter_(option);
  }
  showEndTimePicker.value = false;
};
const endTimeClient_ = () => {
  if (newWorkForm.startTimeInPlan) {
    showEndTimePicker.value = true;
  }
};
//提交数据
const submitAddNewWorkForm_ = () => {
  console.log("gogog");
};
onMounted(() => {
  console.log("新添加工作页面");
});
</script>
<template>
  <div class="add-new-work">
    <van-nav-bar
      title="创建新工作"
      right-text="取消"
      @click-right="router.back()"
      :placeholder="true"
      :safe-area-inset-top="true"
    />
    <van-form @submit="submitAddNewWorkForm_">
      <van-field
        name="workName"
        v-model="newWorkForm.workName"
        label="工作名称"
        placeholder="请填写工作名称"
        :rules="newWorkFormRules.workName"
        required
      />
      <van-field
        name="workType"
        label="工作类型"
        required
        :rules="newWorkFormRules.workType"
      >
        <template #input>
          <van-radio-group
            v-model="newWorkForm.workType"
            direction="horizontal"
          >
            <van-radio name="inner">内部检修</van-radio>
            <van-radio name="outer">外部检修</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="workStation"
        label="工作场站"
        placeholder="请选择工作场站"
        readonly
        is-link
        required
        @click="showStationOption = true"
        v-model="newWorkForm.workStationName"
        :rules="newWorkFormRules.workStation"
      />
      <van-field
        name="workHandler"
        label="执行人"
        placeholder="请选择工作执行人"
        readonly
        is-link
        required
        @click="showHandlerOption = true"
        v-model="newWorkForm.workHandlerName"
        :rules="newWorkFormRules.workHandler"
      />
      <van-field
        name="workChecker"
        label="验收人"
        placeholder="请选择工作验收人"
        readonly
        is-link
        required
        @click="showCheckerOption = true"
        v-model="newWorkForm.workCheckerName"
        :rules="newWorkFormRules.workChecker"
      />
      <van-field
        name="startTimeInPlan"
        label="开始时间"
        placeholder="请选择计划开始时间"
        readonly
        is-link
        required
        @click="showStartTimePicker = true"
        v-model="newWorkForm.startTimeInPlan"
        :rules="newWorkFormRules.startTimeInPlan"
      />
      <van-field
        name="endTimeInPlan"
        label="截止时间"
        placeholder="请选择计划截止时间"
        readonly
        is-link
        required
        @click="endTimeClient_"
        v-model="newWorkForm.endTimeInPlan"
        :rules="newWorkFormRules.endTimeInPlan"
      />
      <van-field
        name="workContent"
        label="工作内容"
        placeholder="请输入工作内容"
        v-model="newWorkForm.workContent"
        required
        type="textarea"
        rows="5"
        maxlength="500"
        show-word-limit
        border
        :rules="newWorkFormRules.workContent"
      />
      <div style="margin: 1rem">
        <van-button round type="primary" block native-type="submit"
          >提 交</van-button
        >
      </div>
    </van-form>
    <van-popup v-model:show="showStationOption" position="bottom" round>
      <van-picker
        :columns="stationOption"
        title="工作场站"
        :loading="stationOptionLoading"
        :columns-field-names="{ text: 'stationName', values: 'id' }"
        @confirm="stationSelected_"
        @cancel="showStationOption = false"
      />
    </van-popup>
    <van-popup v-model:show="showHandlerOption" position="bottom" round>
      <van-picker
        :columns="handlerOption"
        title="执行人"
        :loading="handlerOptionLoading"
        columns-field-names="userName"
        @cancel="showHandlerOption = false"
        @confirm="handlerSelected_"
      />
    </van-popup>
    <van-popup v-model:show="showCheckerOption" position="bottom" round>
      <van-picker
        :columns="checkerOption"
        title="验收人"
        :loading="checkerOptionLoading"
        columns-field-names="userName"
        @confirm="checkerSelected_"
        @cancel="showCheckerOption = false"
      />
    </van-popup>
    <van-popup v-model:show="showStartTimePicker" position="bottom" round>
      <van-datetime-picker
        title="计划开始时间"
        :min-date="new Date()"
        @cancel="showStartTimePicker = false"
        @confirm="startTimeSelected_"
      />
    </van-popup>
    <van-popup v-model:show="showEndTimePicker" position="bottom" round>
      <van-datetime-picker
        title="计划开始时间"
        :min-date="dateTimeParser_(newWorkForm.startTimeInPlan)"
        @cancel="showEndTimePicker = false"
        @confirm="endTimeSelected_"
      />
    </van-popup>
  </div>
</template>
<style lang="scss" scoped>
.add-new-work {
  width: 100%;
}
</style>
