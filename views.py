from django.shortcuts import render
from django.views.generic import TemplateView
from django_datatables_view.base_datatable_view import BaseDatatableView
from django.utils.html import format_html
import re

from realty.models import RealtyModel


def home(request):
    return render(request, 'realty/index.html', {'nbar': 'realty'})


def viewDb(request):
    return render(request, 'realty/viewDb.html', {'nbar': 'realty'})


def overview(request):
    return render(request, 'realty/overview.html', {'nbar': 'realty'})


def query(request):
    return render(request, 'realty/getRealtyOptions.html', {'nbar': 'realty'})


def detail(request):
    return render(request, 'realty/propertydetail.html', {'nbar': 'realty'})


def testpage(request):
    return render(request, 'realty/test_page.html', {'nbar': 'realty'})


def testPage2(request):
    return render(request, 'realty/testPage2.html', {'nbar': 'realty'})


class ViewDbList(TemplateView):
    template_name = 'realty/viewDb.html'


class ViewDbListJson(BaseDatatableView):

    model = RealtyModel
    columns = ['r_num',
               # 'rpg',
               'Property_Interest',
               'Files_xx_BillsF',
               'Files_xx_HistF',
               'Files_xx_DetF',
               'Files_xx_DataF',
               'Maps_xx_GIS',
               'Maps_xx_Map',
               'NOTES',
               'Subd',
               'Prop_Details_xx_Acres',
               'Prop_Details_xx_AssessVal',
               'Prop_Details_xx_AssessMinDue',
               'Tax_Due_xx_PctToAss',
               'Tax_Due_xx_TotAmtDue',
               'DatePulled',
               'TaxDates_xx_OldestDue',
               'TaxDates_xx_LastPaid',
               'TaxDates_xx_LastYrPaid',
               'Different_xx_Addr',
               'Different_xx_Zip',
               'Different_xx_State',
               'NHS_imp',
               'InstallYr',
               'TimesSold_xx_Num',
               'TimesSold_xx_Last',
               'Appraised_xx_AppPctOfMax',
               'Appraised_xx_AppLastVal',
               'Appraised_xx_AppMaxVal',
               'AppraisedMaxReduced_xx_AppMaxAmt',
               'AppraisedMaxReduced_xx_AppMaxYr',
               'Assess_xx_AssPctOfMax',
               'Assess_xx_AssLastVal',
               'Assess_xx_AssMaxVal',
               'AssessMaxReduced_xx_AssMaxAmt',
               'AssessMaxReduced_xx_AssMaxYr',
               'ImpNHS_xx_LastPctOfMax',
               'ImpNHS_xx_LastVal',
               'ImpNHS_xx_MaxVal',
               'ImpNHSMaxReduced_xx_MaxAmt',
               'ImpNHSMaxReduced_xx_MaxYr',
               'ImpHS_xx_ihsPctOfMax',
               'ImpHS_xx_ihsLastVal',
               'ImpHS_xx_ihsMaxVal',
               'ImpHSMaxReduced_xx_ihsMaxAmt',
               'ImpHSMaxReduced_xx_ihsMaxYr',
               'LandHS_xx_lhsPctOfMax',
               'LandHS_xx_lhsLastVal',
               'LandHS_xx_lhsMaxVal',
               'LandHSMaxReduced_xx_lhsMaxAmt',
               'LandHSMaxReduced_xx_lhsMaxYr',
               'LandNHS_xx_lnhsPctOfMax',
               'LandNHS_xx_lnhsLastVal',
               'LandNHS_xx_lnhsMaxVal',
               'LandNHSMaxReduced_xx_lnhsMaxAmt',
               'LandNHSMaxReduced_xx_lnhsMaxYr',
               'DaysLate_xx_Curr',
               'DaysLate_xx_Max',
               'PctDiffAddr',
               'PropAddr',
               'OwnerAddr',
               'OwnerName',
               'LegalDesc',
               ]

    def render_column(self, row, column):
        # render custom columns

        # r_num column
        if column == 'r_num':
            my_rnumber = '{0}'.format(row.r_num)
            link = format_html(
                # "<a class=\"clickablename\" href=\"Junk\">{}</a>",
                "<a class=\"clickablename\" href=\"#testPageJunk\">{}</a>",
                my_rnumber)
            return link

        # if column == 'Files_xx_BillsF':
        m = re.search(r"Files_xx_(\w+)F", column)
        if m:
            link_name = m.group(1)
            my_file = '{0}'.format(row.Files_xx_BillsF)
            link = format_html("<a class=\"clickablename\" href=\"{}\">{}</a>",
                               my_file, link_name)
            return link

        # Maps columns
        if column == 'Maps_xx_GIS':
            my_file = '{0}'.format(row.Maps_xx_GIS)
            link = format_html(
                "<a class=\"clickablename\" href=\"{}\">GIS</a>",
                my_file)
            return link

        # if column == 'user':
        #     # escape HTML for security reasons
            # return escape('{0} {1}'.format(row.customer_firstname,
            #                                row.customer_lastname))
        #     return 'link'
        else:
            return super(ViewDbListJson, self).render_column(row, column)
