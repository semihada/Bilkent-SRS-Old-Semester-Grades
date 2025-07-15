# 📌 SRS Old Semester Grades

**Tampermonkey userscript** to enhance the Bilkent SRS (Student Registration System) to view and fetch grades from older semesters.
It provides a dropdown to select semester.

---

## 🔧 Installation Guide

1. **Install Tampermonkey Extension**  
   - For Chrome: [Tampermonkey on Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
   - (Or install Tampermonkey for your preferred browser.)

2. **Install this Script**  -
   - Click below to access the userscript file.
   - [SRS Old Semester Grades v2-2025-01-20.user.js](https://github.com/semihada/Bilkent-SRS-Old-Semester-Grades/raw/master/SRS Old Semester Grades v2-2025-01-20.user.js)  
   - Tampermonkey will detect the script and prompt you.  
     👉 Click **Install**.

---

## ▶️ Usage

1. Log in to [https://stars.bilkent.edu.tr/srs/](https://stars.bilkent.edu.tr/srs/)

2. Look at the **top-right corner** of the SRS page:
   - A **dropdown menu** will appear with semesters like `2022-1`, `2022-2`, etc.
   - A **“Fetch the Data!”** button will appear next to it.

3. **To fetch data:**
   - Select the desired semester from the dropdown.
   - Click **Fetch the Data!**  
     ✅ The script will:
     - Open two new tabs:  
       📄 Courses for that semester,  
       📊 Grades for that semester.

---

## ⚠️ Important Notes

- ✅ Works only when you are logged in to your own account.
- ✅ Fetches **only your own data** using existing SRS AJAX endpoints.
- ❌ Does **not** bypass login or access any other student’s data.

---

## 📜 Disclaimer

This is a personal project and is **not affiliated with Bilkent University**.  
Use at your own risk and ensure it complies with your university’s IT policies.

---

## 📄 License

This project is licensed under the [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/).  
See the [LICENSE](LICENSE) file for full details.
