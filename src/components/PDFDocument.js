import React from 'react'
import { PDFViewer, Page, Text, View, Document } from '@react-pdf/renderer'

const PDFDocument = () => (
  <PDFViewer className="pdf-viewer">
    <Document>
      <Page size="A4">
        <View>
          <Text>PDF Text</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
)

export default PDFDocument