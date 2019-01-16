	  $(document).ready(function() {
	      $('#viewdbtable').on( 'click', 'tbody td:not(:first-child)', function (e) {
          editor.inline( this, {
              buttons: { label: '&gt;', fn: function () { this.submit(); } }
          } );
	      } );

	      $('#viewdbtable').DataTable( {
		      dom: "flrtip",
		      ajax: {
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            // url:"http://localhost:8081/api/staffjason2"
            url:"http://localhost:8080/realty/testmodel_data"
		      },
		      scroller: true,
		      scrollX: true,
		      processing: true,
		      lengthMenu: [25, 50, 100],
		      fixedColumns: {
            leftColumns: 3,
		      },
		      columns: [
			      { data: "r_num",
                render: function(data, type, row, meta){
                  // data = '<a id="clickable_rnum" href="' + data + '">' + data + '</a>';
                  data = '<a class="clickablename" href="#testPagejunk">' + data + '</a>';
                  return data; 
                }
            },
			      { data: "Property_Interest" },
			      { data: "Files___BillsF",
                render: function(data, type, row, meta){
                  data = '<a href="' + data + '">Bills</a>';
                  return data; 
                }
			      },
			      { data: "Files___HistF", 
                render: function(data, type, row, meta){
                  data = '<a href="' + data + '">Hist</a>';
                  return data; 
                }
			      },
			      { data: "Files___DetF",
                render: function(data, type, row, meta){
                  data = '<a href="' + data + '">Det</a>';
                  return data; 
                }
			      },
			      { data: "Files___DataF",
                render: function(data, type, row, meta){
                  data = '<a href="' + data + '">Data</a>';
                  return data; 
                }
			      },
			      { data: "Maps___GIS",
                render: function(data, type, row, meta){
                  data = '<a href="' + data + '">GIS</a>';
                  return data; 
                }
			      },
			      { data: "Maps___Map",
                render: function(data, type, row, meta){
                  data = '<a href="' + data + '">Map</a>';
                  return data; 
                }
			      },
			      { data: "NOTES",
                defaultContent: "<i>Not Set<i>"
			      },
			      { data: "Subd" },
			      { data: "Prop_Details___Acres" },
			      { data: "Prop_Details___AssessVal" },
			      { data: "Prop_Details___AssessMinDue" },
			      { data: "Tax_Due___PctToAss" },
			      { data: "Tax_Due___TotAmtDue" },
			      { data: "DatePulled" },
			      { data: "TaxDates___OldestDue" },
			      { data: "TaxDates___LastPaid" },
			      { data: "TaxDates___LastYrPaid" },
			      { data: "Different___Addr" },
			      { data: "Different___Zip" },
			      { data: "Different___State" },
			      { data: "NHS_imp" },
			      { data: "InstallYr" },
			      { data: "TimesSold___Num" },
			      { data: "TimesSold___Last" },
			      { data: "Appraised___AppPctOfMax" },
			      { data: "Appraised___AppLastVal" },
			      { data: "Appraised___AppMaxVal" },
			      { data: "AppraisedMaxReduced___AppMaxAmt" },
			      { data: "AppraisedMaxReduced___AppMaxYr" },
			      { data: "Assess___AssPctOfMax" },
			      { data: "Assess___AssLastVal" },
			      { data: "Assess___AssMaxVal" },
			      { data: "AssessMaxReduced___AssMaxAmt" },
			      { data: "AssessMaxReduced___AssMaxYr" },
			      { data: "ImpNHS___LastPctOfMax" },
			      { data: "ImpNHS___LastVal" },
			      { data: "ImpNHS___MaxVal" },
			      { data: "ImpNHSMaxReduced___MaxAmt" },
			      { data: "ImpNHSMaxReduced___MaxYr" },
			      { data: "ImpHS___ihsPctOfMax" },
			      { data: "ImpHS___ihsLastVal" },
			      { data: "ImpHS___ihsMaxVal" },
			      { data: "ImpHSMaxReduced___ihsMaxAmt" },
			      { data: "ImpHSMaxReduced___ihsMaxYr" },
			      { data: "LandHS___lhsPctOfMax" },
			      { data: "LandHS___lhsLastVal" },
			      { data: "LandHS___lhsMaxVal" },
			      { data: "LandHSMaxReduced___lhsMaxAmt" },
			      { data: "LandHSMaxReduced___lhsMaxYr" },
			      { data: "LandNHS___lnhsPctOfMax" },
			      { data: "LandNHS___lnhsLastVal" },
			      { data: "LandNHS___lnhsMaxVal" },
			      { data: "LandNHSMaxReduced___lnhsMaxAmt" },
			      { data: "LandNHSMaxReduced___lnhsMaxYr" },
			      { data: "DaysLate___Curr" },
			      { data: "DaysLate___Max" },
			      { data: "PctDiffAddr" },
			      { data: "PropAddr" },
			      { data: "OwnerAddr" },
			      { data: "OwnerName" },
			      { data: "LegalDesc" },

			      // { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) }
		      ],
		      'rowCallback': function(row, data, index){

			  // $("thead ").css("border-right: 1px solid #ddd");
			  // $(row).css('background-color', '#B8B8B8');
			  // window.alert('jason - TEST row=' + row + 'data=' + data.rpg)

			  // r_num
			  if(/^M/.test(data.r_num)){ 
			      $('td:eq(0)',row).css('background-color', '#BFECC7');
			  } else {
			      $('td:eq(0)',row).css('background-color', '#B8B8B8');
			  }

			  // Property Interest
			  if(/Not Vetted/.test(data.Property_Interest)) { 
			      $('td:eq(1)',row).css('background-color', '#FFF381');
			  } else if(/Vetting/.test(data.Property_Interest)) { 
			      $('td:eq(1)',row).css('background-color', '#FF8EC5');
			  } else if(/Vetted - Other/.test(data.Property_Interest)) { 
			      $('td:eq(1)',row).css('background-color', '#FF5B01');
			  } else if(/Vetted - No Good/.test(data.Property_Interest)) { 
			      $('td:eq(1)',row).css('background-color', '#D80608');
			  } else if(/Vetted - Need to Call/.test(data.Property_Interest)) { 
			      $('td:eq(1)',row).css('background-color', '#8FC502');
			  } else if(/Owner Called - No contact/.test(data.Property_Interest)) { 
			      $('td:eq(1)',row).css('background-color', '#FF8E02');
			  } else if(/Owner Called - Low Interest/.test(data.Property_Interest)) { 
			      $('td:eq(1)',row).css('background-color', '#015912');
			  } else if(/Owner Called - High Interest/.test(data.Property_Interest)) { 
			      $('td:eq(1)',row).css('background-color', '#1DAE15');
			  } else if(/Owner Called - Will not sell/.test(data.Property_Interest)) { 
			      $('td:eq(1)',row).css('background-color', '#FE9D3E');
			  } else if(/Owner Called - Negotiating/.test(data.Property_Interest)) { 
			      $('td:eq(1)',row).css('background-color', '#8EC5FF');
			  } else if(/Prop - Sold/.test(data.Property_Interest)) { 
			      $('td:eq(1)',row).css('background-color', '#FFC502');
			  } else if(/Prop - Bought/.test(data.Property_Interest)) { 
			      $('td:eq(1)',row).css('background-color', '#45DE4D');
			  }

			  if(data.Maps___map== 'n/a'){ // map
			      $(row).find('td:eq(7)').css('background-color', '#FFC502');
			  }

			  if(data.Tax_Due___PctToAss < 5){ 
			      $('td:eq(13)',row).css('background-color', '#BFECC7');
			  } else if(data.Tax_Due___PctToAss >= 5 && data.Tax_Due___PctToAss <= 20) { 
			      $('td:eq(13)',row).css('background-color', '#FFC502');
			  } else if(data.Tax_Due___PctToAss > 20){ 
			      $('td:eq(13)',row).css('background-color', '#FF8EC5');
			  }

			  if(/^0/.test(data.Different___Addr)) { 
			      $('td:eq(19)',row).css('background-color', '#FF8EC5');
			  } else if(/^1/.test(data.Different___Addr)) { 
			      $('td:eq(19)',row).css('background-color', '#BFECC7');
			  } else if(data.Different___Addr == 'n/a') { 
			      $('td:eq(19)',row).css('background-color', '#FFC502');
			  }

			  if(data.Different___Zip == 0) { 
			      $('td:eq(20)',row).css('background-color', '#FF8EC5');
			  } else if(data.Different___Zip == 1) { 
			      $('td:eq(20)',row).css('background-color', '#BFECC7');
			  } else if(data.Different___Zip == 'n/a') { 
			      $('td:eq(20)',row).css('background-color', '#FFC502');
			  }

			  if(data.Different___State == 0) { 
			      $('td:eq(21)',row).css('background-color', '#FF8EC5');
			  } else if(/1 - \S\S/.test(data.Different___State)) { 
			      $('td:eq(21)',row).css('background-color', '#BFECC7');
			  } else if(data.Different___State == 'n/a') { 
			      $('td:eq(21)',row).css('background-color', '#FFC502');
			  }

			  if(data.NHS_imp == 1) { 
			      $('td:eq(22)',row).css('background-color', '#BFECC7');
			  } else if(data.NHS_imp == 0) { 
			      $('td:eq(22)',row).css('background-color', '#FF8EC5');
			  }
			  $('td:eq(26)',row).css('background-color', '#B8B8B8'); // Appraised___AppPctOfMax
			  $('td:eq(31)',row).css('background-color', '#B8B8B8'); // Assessed___AssPctOfMax
			  $('td:eq(36)',row).css('background-color', '#B8B8B8'); // ImpNHS___LastPctOfMax
			  $('td:eq(41)',row).css('background-color', '#B8B8B8'); // IMPHS___ihsAppPctOfMax
			  $('td:eq(46)',row).css('background-color', '#B8B8B8'); // LandHS___lhsAppPctOfMax
			  $('td:eq(51)',row).css('background-color', '#B8B8B8'); // LandNHS___lnhsAppPctOfMax

			  if(/^1/.test(data.PctDiffAddr)) { 
			      $('td:eq(58)',row).css('background-color', '#FBECC7');
			  } else if(/^0/.test(data.PctDiffAddr)) { 
			      $('td:eq(58)',row).css('background-color', '#FF8EC5');
			  } else if(data.PctDiffAddr == 'n/a') { 
			      $('td:eq(58)',row).css('background-color', '#FFC502');
			  }

		      },
		      select: {
			      style:    'os',
			      selector: 'td:first-child'
		      },
		      // buttons: [
			    //   { extend: "create", editor: editor },
			    //   { extend: "edit",   editor: editor },
			    //   { extend: "remove", editor: editor }
		      // ],
	      } );

        // https://stackoverflow.com/questions/35547647/how-to-make-datatable-row-or-cell-clickable
        $('#viewdbtable').on('click', 'tbody td', function() {
          //get textContent of the TD
          console.log('TD cell textContent : ', this.textContent)

          $(".tab-pane").removeClass("active in");
          $("#propertyDetailPage").addClass("active in");
          $('a[data-target="#propertyDetailPage"]').tab('show');
          return false;
        })

	  } );
