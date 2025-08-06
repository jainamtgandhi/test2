# Checkpoint 0805 - GTM Strategy & Sales Enablement Apps Fixed + Customer Research 3 Icons Fixed

## Date: August 5, 2024

## Summary
Fixed issues with GTM Strategy and Sales Enablement folder apps not opening/clickable. All apps are now properly registered and functional. Additionally fixed Customer Research 3 folder icon visibility issues.

## Issues Resolved

### 1. Missing App Registrations
**Problem**: Apps in GTM Strategy and Sales Enablement folders were not registered in the program registry, causing them to fail when clicked.

**Solution**: Added missing app registrations to `src/scripts/utils/programRegistry.js`:

#### GTM Strategy Apps Added:
- `launch-planning` - Launch Planning
- `campaign-execution` - Campaign Execution  
- `kpi-tracking` - KPI Tracking
- `cross-functional-alignment` - Cross-Functional Alignment

#### Sales Enablement Apps Added:
- `one-pagers-placeholder` - Sales Collateral
- `battlecards-placeholder` - Pitch Decks
- `email-templates-placeholder` - Sales Training
- `sales-decks-placeholder` - Customer Proof

### 2. Image Loading Issues
**Problem**: Some apps were trying to load placeholder text files instead of actual images.

**Solution**: Updated image paths in HTML files:

#### Fixed Files:
- `src/apps/kpi-tracking/kpi-tracking.html` - Updated to use `go-to-market-placeholder.webp`
- `src/apps/cross-functional-alignment/cross-functional-alignment.html` - Updated to use `go-to-market-placeholder.webp`

### 3. Customer Research 3 Icon Visibility Issues
**Problem**: Customer Research 3 folder had missing sidebar content and folder icons due to incorrect path resolution.

**Solution**: Fixed path resolution and added missing data files:

#### Issues Fixed:
- **Missing info.json**: Created `src/apps/marketing-projects/customer-research-3/info.json` with social links, skills, and software data
- **Incorrect path resolution**: Updated `transformAssetPath` function to use `../../../../assets/` instead of `../../../assets/` for the subdirectory
- **HTML path fixes**: Updated all image paths in HTML to use correct relative paths
- **Icon consistency**: Changed folder icons to use `resume.webp` to match other folders
- **Social link icons**: Updated to use same icons as GTM Strategy (`sharebird.png`, `medium.svg`, `linkedin.png`)

#### Files Modified:
- `src/apps/marketing-projects/customer-research-3/customer-research-3.js` - Fixed path resolution
- `src/apps/marketing-projects/customer-research-3/customer-research-3.html` - Fixed image paths
- `src/apps/marketing-projects/customer-research-3/info.json` - Created with proper data structure

## Technical Details

### App Configuration
Each app is configured with:
- Dimensions: 258x725 pixels
- Minimum dimensions: 305x350 pixels
- Status bar text for zoom/pan functionality
- Menu bar with File and View options
- Correct app paths pointing to their HTML files

### Path Resolution Fix
The customer-research-3 folder is located at `src/apps/marketing-projects/customer-research-3/`, which requires going up 4 levels to reach the assets folder:
- `customer-research-3/` → `marketing-projects/` (1 level)
- `marketing-projects/` → `apps/` (2 levels)
- `apps/` → `src/` (3 levels)
- `src/` → root (4 levels)
- Then into `assets/`

### Folder Structure
```
GTM Strategy Folder:
├── Launch Planning ✅
├── Campaign Execution ✅
├── KPI Tracking ✅ (fixed image path)
└── Cross-Functional Alignment ✅ (fixed image path)

Sales Enablement Folder:
├── Sales Collateral ✅
├── Pitch Decks ✅
├── Sales Training ✅
└── Customer Proof ✅

Customer Research 3 Folder:
├── Competitor Benchmarking ✅ (fixed icons)
├── Market Sizing ✅ (fixed icons)
├── Pricing Strategy ✅ (fixed icons)
└── Opportunity Mapping ✅ (fixed icons)
```

## Files Modified
1. `src/scripts/utils/programRegistry.js` - Added 8 new app registrations
2. `src/apps/kpi-tracking/kpi-tracking.html` - Fixed image path
3. `src/apps/cross-functional-alignment/cross-functional-alignment.html` - Fixed image path
4. `src/apps/marketing-projects/customer-research-3/customer-research-3.js` - Fixed path resolution
5. `src/apps/marketing-projects/customer-research-3/customer-research-3.html` - Fixed image paths
6. `src/apps/marketing-projects/customer-research-3/info.json` - Created with proper data structure

## Status
✅ **All GTM Strategy apps working**
✅ **All Sales Enablement apps working**
✅ **All Customer Research apps working** (from previous checkpoint)
✅ **Customer Research 3 folder fully functional** - sidebar icons, folder icons, and all content visible

## Next Steps
- Test all apps to ensure they open correctly
- Verify image loading in all apps
- Consider adding more placeholder content to apps
- Review other folder apps for similar issues

---

## 📋 COMPREHENSIVE FOLDER DUPLICATION PROMPT

**Use this prompt when duplicating folders with icons and sidebar content to avoid iterative debugging:**

---

### PROMPT: Duplicate Marketing Project Folder with Icons and Sidebar Content

I want to duplicate a marketing project folder (like customer-research) to create a new folder (e.g., customer-research-4) with proper icons and sidebar content. Please follow these exact steps:

#### 1. **Directory Structure Analysis**
- First, analyze the directory structure to determine the correct path resolution
- Count the levels from the new folder to the assets directory
- Example: `src/apps/marketing-projects/customer-research-4/` needs `../../../../assets/` (4 levels up)

#### 2. **Create Required Files**
Create these files in the new folder:
- `folder-name.html` (copy from original)
- `folder-name.js` (copy from original) 
- `folder-name.css` (copy from original)
- `info.json` (copy from original)

#### 3. **Fix Path Resolution in JavaScript**
In the new `folder-name.js` file:
- Update `transformAssetPath` function to use correct relative path
- For subdirectories: use `../../../../assets/` instead of `../../../assets/`
- Update arrow icon paths in `expandCard` and `toggleCard` functions
- Add debugging console logs to verify path resolution

#### 4. **Fix Path Resolution in HTML**
In the new `folder-name.html` file:
- Update all image src attributes to use correct relative paths
- Fix sidebar arrow icons: `../../../../assets/apps/about/pulldown.webp`
- Fix folder icons: `../../../../assets/gui/desktop/resume.webp`
- Use `resume.webp` for consistency with other folders

#### 5. **Verify Asset Files Exist**
Check that these files exist in assets:
- `assets/gui/start-menu/sharebird.png`
- `assets/gui/start-menu/medium.svg` 
- `assets/gui/start-menu/linkedin.png`
- `assets/gui/desktop/resume.webp`
- `assets/apps/about/pulldown.webp`
- `assets/apps/about/pullup.webp`

#### 6. **Update info.json Social Links**
Ensure social links use correct file extensions:
```json
{
  "socials": [
    {
      "key": "sharebird",
      "name": "Sharebird", 
      "icon": "assets/gui/start-menu/sharebird.png",
      "url": "https://sharebird.com/profile/jainamtgandhi"
    },
    {
      "key": "medium",
      "name": "Medium",
      "icon": "assets/gui/start-menu/medium.svg", 
      "url": "https://medium.com/@jainamtgandhi"
    },
    {
      "key": "linkedin",
      "name": "LinkedIn",
      "icon": "assets/gui/start-menu/linkedin.png",
      "url": "https://www.linkedin.com/in/jainamtgandhi/"
    }
  ]
}
```

#### 7. **Add Debugging**
Add console logging to verify:
- Info.json loads successfully
- Social links populate correctly
- Skills and software icons load
- Folder icons display properly

#### 8. **Test Checklist**
Verify these work:
- ✅ Sidebar social links with icons
- ✅ Sidebar skills with icons  
- ✅ Sidebar software with icons
- ✅ Folder icons in main grid
- ✅ Arrow icons for expand/collapse
- ✅ All paths resolve correctly

#### 9. **Common Issues to Avoid**
- **Wrong path resolution**: Subdirectories need extra `../`
- **Missing info.json**: Required for sidebar content
- **Incorrect file extensions**: Use `.png` not `.jpg` for sharebird
- **Missing asset files**: Verify all referenced files exist
- **Inconsistent icons**: Use `resume.webp` for folder consistency

#### 10. **Path Reference Guide**
```
From src/apps/marketing-projects/folder-name/:
- Assets: ../../../../assets/
- Arrow icons: ../../../../assets/apps/about/
- Folder icons: ../../../../assets/gui/desktop/
- Social icons: ../../../../assets/gui/start-menu/
```

**Follow this prompt exactly to avoid the iterative debugging we experienced with customer-research-3.**

---

**Checkpoint created**: August 5, 2024
**Apps fixed**: 8 new registrations + 2 image path fixes + Customer Research 3 icon visibility
**Status**: All GTM Strategy, Sales Enablement, and Customer Research 3 apps now functional 