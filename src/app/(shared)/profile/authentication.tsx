import { Breadcrumb } from "@/components/Breadcrumb";
import { Stepper } from "@/components/Stepper";
import { Background } from "@/kits/Background";
import { Button } from "@/kits/Button";
import { Input } from "@/kits/Input";
import Icon from "@expo/vector-icons/Feather";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface StepData {
  phoneNumber: string;
  nationalId: string;
  isForeign: boolean;
  firstName: string;
  lastName: string;
  fatherName: string;
  birthDate: string;
}

function Authentication() {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepData, setStepData] = useState<StepData>({
    phoneNumber: "",
    nationalId: "",
    isForeign: false,
    firstName: "",
    lastName: "",
    fatherName: "",
    birthDate: "",
  });

  const stepLabels = ["شماره تلفن", "کد ملی", "اطلاعات شخصی"];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateStepData = (field: keyof StepData, value: string | boolean) => {
    setStepData((prev) => ({ ...prev, [field]: value }));
  };

  const renderStep1 = () => (
    <View style={styles.stepContent}>
      <Input
        label="شماره تلفن همراه"
        value={stepData.phoneNumber}
        onChangeText={(text) => updateStepData("phoneNumber", text)}
        placeholder="شماره تلفن همراه خود را وارد کنید"
        keyboardType="phone-pad"
        style={styles.input}
      />
      <Button
        onPress={handleNext}
        disabled={!stepData.phoneNumber}
        style={styles.button}
        size="large"
      >
        تایید
      </Button>
    </View>
  );

  const renderStep2 = () => (
    <View style={styles.stepContent}>
      <Input
        label="کد ملی"
        value={stepData.nationalId}
        onChangeText={(text) => updateStepData("nationalId", text)}
        placeholder="کد ملی خود را وارد کنید"
        keyboardType="numeric"
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => updateStepData("isForeign", !stepData.isForeign)}
      >
        <View
          style={[
            styles.checkbox,
            stepData.isForeign && styles.checkboxChecked,
          ]}
        >
          {stepData.isForeign && <Icon name="check" size={16} color="white" />}
        </View>
        <Text style={styles.checkboxLabel}>اتباع هستم</Text>
      </TouchableOpacity>

      <Button
        onPress={handleNext}
        disabled={!stepData.nationalId}
        style={StyleSheet.flatten([
          styles.button,
          !stepData.nationalId && styles.buttonDisabled,
        ])}
        size="large"
      >
        تایید و ادامه
      </Button>
    </View>
  );

  const renderStep3 = () => (
    <View style={styles.stepContent}>
      <Input
        label="نام"
        value={stepData.firstName}
        onChangeText={(text) => updateStepData("firstName", text)}
        placeholder="نام خود را وارد کنید"
        style={styles.input}
      />

      <Input
        label="نام خانوادگی"
        value={stepData.lastName}
        onChangeText={(text) => updateStepData("lastName", text)}
        placeholder="نام خانوادگی خود را وارد کنید"
        style={styles.input}
      />

      <Input
        label="نام پدر"
        value={stepData.fatherName}
        onChangeText={(text) => updateStepData("fatherName", text)}
        placeholder="نام پدر خود را وارد کنید"
        style={styles.input}
      />

      <Input
        label="تاریخ تولد"
        value={stepData.birthDate}
        onChangeText={(text) => updateStepData("birthDate", text)}
        placeholder="تاریخ تولد خود را وارد کنید"
        style={styles.input}
      />

      <Button
        onPress={() => {
          // Handle final submission
          console.log("Authentication completed", stepData);
        }}
        disabled={
          !stepData.firstName ||
          !stepData.lastName ||
          !stepData.fatherName ||
          !stepData.birthDate
        }
        style={StyleSheet.flatten([
          styles.button,
          (!stepData.firstName ||
            !stepData.lastName ||
            !stepData.fatherName ||
            !stepData.birthDate) &&
            styles.buttonDisabled,
        ])}
        size="large"
      >
        تایید و ادامه
      </Button>
    </View>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return renderStep1();
    }
  };

  return (
    <Background paddingTop={32}>
      {/* Breadcrumb */}
      <Breadcrumb items={["پروفایل", "احراز هویت"]} />

      {/* Stepper */}
      <Stepper
        currentStep={currentStep}
        totalSteps={3}
        stepLabels={stepLabels}
      />

      {/* Step Content */}
      {renderCurrentStep()}
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    flex: 1,
    textAlign: "center",
    marginRight: 40, // Compensate for back button
  },
  stepContent: {
    paddingHorizontal: 20,
    gap: 20,
  },
  input: {
    minWidth: "100%",
  },
  button: {
    marginTop: 20,
    width: "100%",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    borderRadius: 4,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#1C39BB",
    borderColor: "#1C39BB",
  },
  checkboxLabel: {
    fontSize: 16,
    color: "#374151",
  },
});

export default Authentication;
