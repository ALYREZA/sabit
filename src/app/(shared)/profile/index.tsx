import { Breadcrumb } from "@/components/Breadcrumb";
import { ExpandableCard } from "@/components/Card";
import { LogoutButton } from "@/components/LogoutButton";
import { useAuth } from "@/contexts/AuthContext";
import { Background } from "@/kits/Background";
import { Box } from "@/kits/Box";
import { Text } from "@/kits/typography";
import Icon from "@expo/vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

function Profile() {
  const { user } = useAuth();

  const handleProfileImageChange = () => {
    console.log("Change profile image");
  };

  const handleLogout = () => {
    console.log("Logout pressed");
  };

  const handleMenuPress = (menuItem: string) => {
    console.log(`${menuItem} pressed`);
  };

  const handleBreadcrumbPress = (index: number) => {
    console.log(`Breadcrumb item ${index} pressed`);
  };

  return (
    <Background paddingTop={32}>
      {/* Breadcrumb Header */}
      <Breadcrumb
        items={["خانه", "پروفایل"]}
        onItemPress={handleBreadcrumbPress}
      />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* App Title */}
        <Box style={styles.appTitleSection}>
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
              <View style={styles.profileImagePlaceholder}>
                <Icon name="user" size={40} color="white" />
              </View>
            </LinearGradient>
            <TouchableOpacity
              style={styles.cameraOverlay}
              onPress={handleProfileImageChange}
            >
              <View style={styles.cameraIcon}>
                <Icon name="camera" size={16} color="#6B7280" />
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
            {user?.firstName} {user?.lastName}
          </Text>
        </Box>

        {/* Separator */}
        <View style={styles.separator} />

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
                <Icon name="info" size={12} color="#FF8A65" />
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

        <ExpandableCard
          title="احراز هویت"
          icon={<Icon name="info" size={20} color="#6B7280" />}
          onPress={() => router.push("/(shared)/profile/authentication")}
        />

        {/* User-Specific Actions */}
        <ExpandableCard
          title="علایق من"
          icon={<Icon name="heart" size={20} color="#6B7280" />}
          onPress={() => handleMenuPress("علایق من")}
        />

        <ExpandableCard
          title="داشبورد من"
          icon={<Icon name="bar-chart-2" size={20} color="#6B7280" />}
          onPress={() => handleMenuPress("داشبورد من")}
        />

        <ExpandableCard
          title="مراکز من"
          icon={<Icon name="home" size={20} color="#6B7280" />}
          onPress={() => handleMenuPress("مراکز من")}
        />

        <ExpandableCard
          title="کانال ها"
          icon={<Icon name="users" size={20} color="#6B7280" />}
          onPress={() => handleMenuPress("کانال ها")}
        />

        <ExpandableCard
          title="تمدید عضویت"
          icon={<Icon name="calendar" size={20} color="#6B7280" />}
          onPress={() => handleMenuPress("تمدید عضویت")}
        />

        <ExpandableCard
          title="مراکز پیشفرض"
          icon={<Icon name="star" size={20} color="#6B7280" />}
          onPress={() => handleMenuPress("مراکز پیشفرض")}
        />

        {/* Wallet/Financial Section */}
        <ExpandableCard
          title="کیف پول"
          icon={<Icon name="credit-card" size={20} color="#6B7280" />}
          onPress={() => handleMenuPress("کیف پول")}
        />

        <ExpandableCard
          title="تاریخچه تراکنش بانکی"
          icon={<Icon name="clock" size={20} color="#6B7280" />}
          onPress={() => handleMenuPress("تاریخچه تراکنش بانکی")}
        />

        <ExpandableCard
          title="سفارش ها"
          icon={<Icon name="list" size={20} color="#6B7280" />}
          onPress={() => handleMenuPress("سفارش ها")}
        />

        {/* Application Settings/Information */}
        <ExpandableCard
          title="تنظیمات اپلیکیشن"
          icon={<Icon name="settings" size={20} color="#6B7280" />}
          onPress={() => handleMenuPress("تنظیمات اپلیکیشن")}
        />

        <ExpandableCard
          title="امنیت و محرمانگی"
          icon={<Icon name="shield" size={20} color="#6B7280" />}
          isAccordion={true}
          defaultExpanded={false}
          onPress={() => handleMenuPress("امنیت و محرمانگی")}
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

        <ExpandableCard
          title="پشتیبانی و سوالات متداول"
          icon={<Icon name="help-circle" size={20} color="#6B7280" />}
          onPress={() => handleMenuPress("پشتیبانی و سوالات متداول")}
        />

        <ExpandableCard
          title="قوانین و مقررات"
          icon={<Icon name="file-text" size={20} color="#6B7280" />}
          onPress={() => handleMenuPress("قوانین و مقررات")}
        />

        <ExpandableCard
          title="درباره اپلیکیشن سابیت"
          icon={<Icon name="info" size={20} color="#6B7280" />}
          onPress={() => handleMenuPress("درباره اپلیکیشن سابیت")}
        />

        {/* Logout Button */}
        <LogoutButton onPress={handleLogout} />
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
