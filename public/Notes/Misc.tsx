const renderMenuItem = (item: NavigationItem) => {
   // First handle window opening case
   if (item.openInWindow) {
     return (
       <MenuItem key={item.label}>

           href={item.path}
           onClick={(e) => {
             e.preventDefault();
             handleWindowOpen(item.path);
           }}
         >
           {item.label}
         </a>
       </MenuItem>
     );
   }

   // For internal navigation (like Home), use Link
   if (!item.isExternal) {
     return (
       <MenuItem key={item.label}>
         <Link to={item.path}>{item.label}</Link>
       </MenuItem>
     );
   }

   // For external links
   return (
     <MenuItem key={item.label}>
       <a href={item.path} target="_blank" rel="noopener noreferrer">
         {item.label}
       </a>
     </MenuItem>
   );
 };