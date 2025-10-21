import { ExpandableCard } from "@/components/Card";
import { Background } from "@/kits/Background";
import { Box } from "@/kits/Box";
import { Button } from "@/kits/Button";
import { Text } from "@/kits/typography";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

interface UserData {
  name: string;
  email: string;
  isMember: boolean;
  expirationDate?: string;
  profileImage?: string;
}

function Profile() {
  const [userData] = useState<UserData>({
    name: "نام و نام خانوادگی",
    email: "name.family@gmail.com",
    isMember: false,
    expirationDate: "",
  });

  const handleMembershipRequest = () => {
    console.log("Membership request pressed");
  };

  const handleProfileImageChange = () => {
    console.log("Change profile image");
  };

  return (
    <Background paddingTop={32}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header with QR Code and Icon */}
        <Box style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.qrCode}>
              <Text size={1} color="gray">
                QR
              </Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.buildingIcon}>
              <Text size={2} color="gray">
                🏛️
              </Text>
            </View>
          </View>
        </Box>

        {/* App Title */}
        <Box style={styles.appTitleSection}>
          <Text
            size={1}
            color="gray"
            align="center"
            style={styles.membershipLabel}
          >
            کارت عضویت
          </Text>
          <Text size={4} weight="medium" color="gray" align="center">
            سوپر اپلیکیشن سابیت
          </Text>
        </Box>

        {/* Profile Picture Section */}
        <Box style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <LinearGradient
              colors={["#8B5CF6", "#EC4899"]}
              style={styles.profileImageGradient}
            >
              {userData.profileImage ? (
                <Image
                  source={{ uri: userData.profileImage }}
                  style={styles.profileImage}
                />
              ) : (
                <View style={styles.profileImagePlaceholder}>
                  <Text size={6} color="white">
                    👤
                  </Text>
                </View>
              )}
            </LinearGradient>
            <TouchableOpacity
              style={styles.cameraOverlay}
              onPress={handleProfileImageChange}
            >
              <View style={styles.cameraIcon}>
                <Text size={2} color="gray">
                  📷
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Box>

        {/* User Information */}
        <Box style={styles.userInfoSection}>
          <Text
            size={3}
            weight="medium"
            color="gray"
            align="center"
            style={styles.userName}
          >
            {userData.name}
          </Text>
          <TouchableOpacity>
            <Text size={2} color="blue" align="center" style={styles.userEmail}>
              {userData.email}
            </Text>
          </TouchableOpacity>
        </Box>

        {/* Separator */}
        <View style={styles.separator} />

        {/* Membership Status */}
        <Box style={styles.membershipSection}>
          <Box style={styles.membershipStatus}>
            <Text size={2} color="gray" align="right">
              {userData.isMember ? "عضو هستید" : "عضو نیستید"}
            </Text>
            {!userData.isMember && (
              <Box style={styles.expirationRow}>
                <Text size={1} color="gray" align="right">
                  تاریخ پایان اعتبار
                </Text>
                <View style={styles.clockIcon}>
                  <Text size={1} color="gray">
                    🕐
                  </Text>
                </View>
              </Box>
            )}
          </Box>
        </Box>

        {/* Action Button */}
        <Box style={styles.actionSection}>
          <Button
            variant="outlined"
            style={styles.membershipButton}
            onPress={handleMembershipRequest}
          >
            <View style={styles.buttonContent}>
              <Text size={2} color="blue">
                +
              </Text>
              <Text size={2} color="blue" style={styles.buttonText}>
                درخواست عضویت
              </Text>
            </View>
          </Button>
        </Box>

        {/* Statistics Cards */}
        <Box style={styles.statsSection}>
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text size={8} weight="bold" color="blue" align="center">
                ۶
              </Text>
              <Text
                size={2}
                color="gray"
                align="center"
                style={styles.statLabel}
              >
                خریداری شده
              </Text>
            </View>
            <View style={styles.statCard}>
              <Text size={8} weight="bold" color="blue" align="center">
                ۸
              </Text>
              <Text
                size={2}
                color="gray"
                align="center"
                style={styles.statLabel}
              >
                بارگذاری شده
              </Text>
            </View>
            <View style={styles.statCard}>
              <Text size={8} weight="bold" color="blue" align="center">
                ۱۳
              </Text>
              <Text
                size={2}
                color="gray"
                align="center"
                style={styles.statLabel}
              >
                در دست امانت
              </Text>
            </View>
          </View>
        </Box>

        {/* Authentication Notice Card */}
        <Box style={styles.authNoticeSection}>
          <View style={styles.authNoticeCard}>
            <View style={styles.authNoticeContent}>
              <View style={styles.infoIcon}>
                <Text size={2} color="orange">
                  i
                </Text>
              </View>
              <Text size={3} color="gray" style={styles.authNoticeText}>
                برای استفاده از همه امکانات اپلیکیشن،{" "}
                <Text size={3} color="orange" style={styles.authLink}>
                  احراز هویت
                </Text>{" "}
                نمایید.
              </Text>
            </View>
          </View>
        </Box>

        {/* Security Card */}
        <ExpandableCard
          title="امنیت و محرمانگی"
          isAccordion={true}
          defaultExpanded={false}
          onPress={() => console.log("Security card pressed")}
        >
          <View style={styles.securityContent}>
            <Text size={2} color="gray" style={styles.securityText}>
              تنظیمات امنیتی و حریم خصوصی شما
            </Text>
            <View style={styles.securityOptions}>
              <TouchableOpacity style={styles.securityOption}>
                <Text size={2} color="blue">
                  تغییر رمز عبور
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.securityOption}>
                <Text size={2} color="blue">
                  احراز هویت دو مرحله‌ای
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.securityOption}>
                <Text size={2} color="blue">
                  مدیریت حریم خصوصی
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ExpandableCard>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  qrCode: {
    width: 24,
    height: 24,
    backgroundColor: "#F5F5F5",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buildingIcon: {
    width: 32,
    height: 32,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  appTitleSection: {
    alignItems: "center",
    marginBottom: 32,
  },
  membershipLabel: {
    marginBottom: 8,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  profileImageContainer: {
    position: "relative",
  },
  profileImageGradient: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  profileImagePlaceholder: {
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraOverlay: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  cameraIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  userInfoSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  userName: {
    marginBottom: 8,
  },
  userEmail: {
    textDecorationLine: "underline",
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 20,
    marginBottom: 24,
    borderStyle: "dashed",
  },
  membershipSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  membershipStatus: {
    alignItems: "flex-end",
  },
  expirationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  clockIcon: {
    marginLeft: 8,
  },
  actionSection: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  membershipButton: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#3B82F6",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    marginLeft: 8,
  },
  statsSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E9ECEF",
  },
  statLabel: {
    marginTop: 8,
  },
  authNoticeSection: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  authNoticeCard: {
    backgroundColor: "#FFF3E0",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FF8A65",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  authNoticeContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  authNoticeText: {
    textAlign: "right",
    flex: 1,
    lineHeight: 24,
  },
  authLink: {
    textDecorationLine: "underline",
  },
  infoIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FF8A65",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
  securityContent: {
    paddingTop: 8,
  },
  securityText: {
    marginBottom: 16,
    lineHeight: 20,
  },
  securityOptions: {
    gap: 12,
  },
  securityOption: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#F8F9FA",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E9ECEF",
  },
});

export default Profile;
